// Follow this setup guide to integrate the Deno runtime into your application:
// https://deno.land/manual/examples/deploy_node_app

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.6";
import { GoogleSpreadsheet } from "https://esm.sh/google-spreadsheet@4.1.1";
import { JWT } from "https://esm.sh/google-auth-library@9.6.3";

interface ContactMessage {
  name: string;
  email: string;
  message: string;
  created_at: string;
  recaptcha_token?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "authorization, x-client-info, apikey, content-type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Max-Age": "86400",
      },
      status: 200,
    });
  }

  try {
    // Get the request body
    const { record } = await req.json();

    // Get environment variables
    const serviceAccountCredentials = Deno.env.get(
      "GOOGLE_SERVICE_ACCOUNT_CREDENTIALS",
    );
    const sheetId = Deno.env.get("GOOGLE_SHEET_ID");

    if (!serviceAccountCredentials || !sheetId) {
      throw new Error("Missing required environment variables");
    }

    // Parse service account credentials
    let credentials;
    try {
      credentials = JSON.parse(serviceAccountCredentials);
    } catch (error) {
      throw new Error("Invalid service account credentials format");
    }

    // Create JWT client
    const jwtClient = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(sheetId, jwtClient);
    await doc.loadInfo();

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];

    // Format the data for insertion
    const contactData = record as ContactMessage;
    const rowData = {
      Name: contactData.name,
      Email: contactData.email,
      Message: contactData.message,
      "Submitted At": contactData.created_at,
    };

    // Add the row to the sheet
    await sheet.addRow(rowData);

    return new Response(JSON.stringify({ success: true }), {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "authorization, x-client-info, apikey, content-type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    console.error("Error inserting data into Google Sheet:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Failed to insert data into Google Sheet",
      }),
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "authorization, x-client-info, apikey, content-type",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Content-Type": "application/json",
        },
        status: 500,
      },
    );
  }
});
