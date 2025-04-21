-- Create a table for storing contact form messages
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  recaptcha_token TEXT
);

-- Enable realtime for this table
alter publication supabase_realtime add table contact_messages;
