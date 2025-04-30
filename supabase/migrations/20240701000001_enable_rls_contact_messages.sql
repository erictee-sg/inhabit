-- Enable Row Level Security on contact_messages table
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow only authenticated users to view contact messages
DROP POLICY IF EXISTS "Only authenticated users can view contact messages" ON contact_messages;
CREATE POLICY "Only authenticated users can view contact messages"
ON contact_messages FOR SELECT
USING (auth.role() = 'authenticated');

-- Create policy to allow anyone to insert contact messages (for the contact form)
DROP POLICY IF EXISTS "Anyone can insert contact messages" ON contact_messages;
CREATE POLICY "Anyone can insert contact messages"
ON contact_messages FOR INSERT
WITH CHECK (true);

-- Create policy to allow only authenticated users to update contact messages
DROP POLICY IF EXISTS "Only authenticated users can update contact messages" ON contact_messages;
CREATE POLICY "Only authenticated users can update contact messages"
ON contact_messages FOR UPDATE
USING (auth.role() = 'authenticated');

-- Create policy to allow only authenticated users to delete contact messages
DROP POLICY IF EXISTS "Only authenticated users can delete contact messages" ON contact_messages;
CREATE POLICY "Only authenticated users can delete contact messages"
ON contact_messages FOR DELETE
USING (auth.role() = 'authenticated');

-- Enable realtime for contact_messages table
alter publication supabase_realtime add table contact_messages;