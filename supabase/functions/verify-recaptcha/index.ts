// Follow this setup guide to integrate the Deno runtime into your application:
// https://deno.land/manual/examples/supabase-functions

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.6";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RecaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  error_codes?: string[];
}

Deno.serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders, status: 200 });
  }

  try {
    const { token } = await req.json();

    if (!token) {
      throw new Error("Missing reCAPTCHA token");
    }

    // Get reCAPTCHA secret from environment variables
    const recaptchaSecret = Deno.env.get("RECAPTCHA_SECRET_KEY");
    if (!recaptchaSecret) {
      throw new Error("reCAPTCHA secret key not configured");
    }

    // Verify the token with Google reCAPTCHA API
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${token}`,
      {
        method: "POST",
      },
    );

    const recaptchaResult: RecaptchaResponse = await response.json();

    // Check if verification was successful and score is acceptable (for v3)
    // Typically a score of 0.5 or higher indicates human behavior
    if (recaptchaResult.success && recaptchaResult.score >= 0.5) {
      return new Response(
        JSON.stringify({
          success: true,
          score: recaptchaResult.score,
          message: "reCAPTCHA verification successful",
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        },
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          score: recaptchaResult.score || 0,
          message: "reCAPTCHA verification failed",
          errors: recaptchaResult.error_codes,
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        },
      );
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
