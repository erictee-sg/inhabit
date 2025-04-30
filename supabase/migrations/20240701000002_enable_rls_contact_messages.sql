-- Enable Row Level Security for contact_messages table
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy for SELECT operations - only authenticated users can view messages
DROP POLICY IF EXISTS "Authenticated users can view contact messages" ON contact_messages;
CREATE POLICY "Authenticated users can view contact messages"
ON contact_messages
FOR SELECT
USING (auth.role() = 'authenticated');

-- Create policy for INSERT operations - anyone can submit a contact form
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_messages;
CREATE POLICY "Anyone can submit contact form"
ON contact_messages
FOR INSERT
WITH CHECK (true);

-- Create policy for UPDATE operations - only authenticated users can update messages
DROP POLICY IF EXISTS "Authenticated users can update contact messages" ON contact_messages;
CREATE POLICY "Authenticated users can update contact messages"
ON contact_messages
FOR UPDATE
USING (auth.role() = 'authenticated');

-- Create policy for DELETE operations - only authenticated users can delete messages
DROP POLICY IF EXISTS "Authenticated users can delete contact messages" ON contact_messages;
CREATE POLICY "Authenticated users can delete contact messages"
ON contact_messages
FOR DELETE
USING (auth.role() = 'authenticated');

-- Enable realtime for contact_messages table
alter publication supabase_realtime add table contact_messages;
