-- Create contact_messages table if it doesn't exist
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  recaptcha_token TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable row level security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting data
DROP POLICY IF EXISTS "Allow inserts for all users" ON contact_messages;
CREATE POLICY "Allow inserts for all users"
  ON contact_messages FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy for selecting data (admin only in a real app, but allowing all for simplicity)
DROP POLICY IF EXISTS "Allow select for all users" ON contact_messages;
CREATE POLICY "Allow select for all users"
  ON contact_messages FOR SELECT
  TO anon
  USING (true);

-- Enable realtime (only if not already a member)
DO $
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' 
    AND tablename = 'contact_messages'
  ) THEN
    alter publication supabase_realtime add table contact_messages;
  END IF;
END
$;