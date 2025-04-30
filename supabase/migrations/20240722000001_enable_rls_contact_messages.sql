-- Enable Row Level Security for contact_messages table
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for contact_messages table
-- Allow anyone to insert their own messages
DROP POLICY IF EXISTS "Allow public inserts to contact_messages" ON contact_messages;
CREATE POLICY "Allow public inserts to contact_messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only allow authenticated users with specific roles to view messages
DROP POLICY IF EXISTS "Allow authenticated users to view contact_messages" ON contact_messages;
CREATE POLICY "Allow authenticated users to view contact_messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM auth.users WHERE auth.users.role = 'admin' OR auth.users.role = 'moderator'));

-- Only allow admins to update messages
DROP POLICY IF EXISTS "Allow admins to update contact_messages" ON contact_messages;
CREATE POLICY "Allow admins to update contact_messages"
  ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM auth.users WHERE auth.users.role = 'admin'))
  WITH CHECK (auth.uid() IN (SELECT id FROM auth.users WHERE auth.users.role = 'admin'));

-- Only allow admins to delete messages
DROP POLICY IF EXISTS "Allow admins to delete contact_messages" ON contact_messages;
CREATE POLICY "Allow admins to delete contact_messages"
  ON contact_messages
  FOR DELETE
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM auth.users WHERE auth.users.role = 'admin'));
