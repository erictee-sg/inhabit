// Supabase Edge Function to send contact form emails
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.6";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Enhanced logging function
function log(level, message, data = {}) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    ...data,
  };
  console.log(JSON.stringify(logEntry));
}

serve(async (req) => {
  log("info", "Contact email function triggered", {
    method: req.method,
    url: req.url,
  });

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    log("info", "Handling CORS preflight request");
    return new Response("ok", { headers: corsHeaders, status: 200 });
  }

  try {
    const body = await req.text();
    log("debug", "Request body received", { body });

    const data = JSON.parse(body);
    const { name, email, message, recaptchaToken } = data;

    log("info", "Parsed form data", {
      name,
      email,
      messageLength: message?.length,
    });

    // Validate required fields
    if (!name || !email || !message) {
      log("warn", "Missing required fields", {
        name: !!name,
        email: !!email,
        message: !!message,
      });
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        },
      );
    }

    // Create a connection to SMTP server
    log("info", "Creating SMTP client");
    const client = new SmtpClient();

    // Get environment variables
    const SMTP_HOST = Deno.env.get("SMTP_HOST") || "";
    const SMTP_PORT = parseInt(Deno.env.get("SMTP_PORT") || "587");
    const SMTP_USERNAME = Deno.env.get("SMTP_USERNAME") || "";
    const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD") ? "[REDACTED]" : "";
    const RECIPIENT_EMAIL =
      Deno.env.get("RECIPIENT_EMAIL") || "hello@neliatiga.com";

    log("info", "SMTP configuration", {
      host: SMTP_HOST,
      port: SMTP_PORT,
      username: SMTP_USERNAME,
      password: SMTP_PASSWORD ? "[SET]" : "[NOT SET]",
      recipient: RECIPIENT_EMAIL,
    });

    // Check if SMTP configuration is available
    if (!SMTP_HOST || !SMTP_USERNAME || !Deno.env.get("SMTP_PASSWORD")) {
      log("error", "SMTP configuration missing", {
        host: !!SMTP_HOST,
        username: !!SMTP_USERNAME,
        password: !!Deno.env.get("SMTP_PASSWORD"),
      });
      return new Response(
        JSON.stringify({ error: "Email service not configured properly" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        },
      );
    }

    // Connect to SMTP server
    log("info", "Connecting to SMTP server", {
      host: SMTP_HOST,
      port: SMTP_PORT,
    });
    try {
      await client.connectTLS({
        host: SMTP_HOST,
        port: SMTP_PORT,
        username: SMTP_USERNAME,
        password: Deno.env.get("SMTP_PASSWORD") || "",
      });
      log("info", "Successfully connected to SMTP server");
    } catch (connError) {
      log("error", "Failed to connect to SMTP server", {
        error: connError.message,
        stack: connError.stack,
      });
      throw connError;
    }

    // Send email
    log("info", "Sending email", {
      from: SMTP_USERNAME,
      to: RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
    });

    try {
      await client.send({
        from: SMTP_USERNAME,
        to: RECIPIENT_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        content: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
      log("info", "Email sent successfully");
    } catch (sendError) {
      log("error", "Failed to send email", {
        error: sendError.message,
        stack: sendError.stack,
      });
      throw sendError;
    }

    // Close the connection
    try {
      await client.close();
      log("info", "SMTP connection closed");
    } catch (closeError) {
      log("warn", "Error closing SMTP connection", {
        error: closeError.message,
      });
      // Don't throw here as the email might have been sent successfully
    }

    log("info", "Contact form submission processed successfully");
    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (error) {
    log("error", "Error processing contact form submission", {
      error: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code,
    });
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
});
