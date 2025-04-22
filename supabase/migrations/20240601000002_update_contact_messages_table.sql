-- Add recaptcha_token column to contact_messages table if it doesn't exist
ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS recaptcha_token TEXT;