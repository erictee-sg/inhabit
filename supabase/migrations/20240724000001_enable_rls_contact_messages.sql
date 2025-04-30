-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert records (for contact form submissions)
DROP POLICY IF EXISTS "Allow public inserts" ON contact_messages;
CREATE POLICY "Allow public inserts" ON contact_messages
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Only allow authenticated users with admin or moderator role to view records
DROP POLICY IF EXISTS "Allow admins and moderators to view" ON contact_messages;
CREATE POLICY "Allow admins and moderators to view" ON contact_messages
    FOR SELECT
    TO authenticated
    USING (auth.jwt() ->> 'role' IN ('admin', 'moderator'));

-- Only allow authenticated users with admin role to update records
DROP POLICY IF EXISTS "Allow admins to update" ON contact_messages;
CREATE POLICY "Allow admins to update" ON contact_messages
    FOR UPDATE
    TO authenticated
    USING (auth.jwt() ->> 'role' = 'admin')
    WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- Only allow authenticated users with admin role to delete records
DROP POLICY IF EXISTS "Allow admins to delete" ON contact_messages;
CREATE POLICY "Allow admins to delete" ON contact_messages
    FOR DELETE
    TO authenticated
    USING (auth.jwt() ->> 'role' = 'admin');

-- Enable realtime for this table
alter publication supabase_realtime add table contact_messages;