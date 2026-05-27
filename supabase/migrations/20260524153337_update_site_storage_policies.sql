/*
  # Update storage policies for site-assets bucket

  1. Security
    - Allow anon inserts (needed for programmatic uploads)
    - Keep public read access
*/

-- Allow anon to upload to site-assets bucket
CREATE POLICY "Anon can upload"
  ON storage.objects FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'site-assets');

-- Allow anon to update files in site-assets bucket
CREATE POLICY "Anon can update"
  ON storage.objects FOR UPDATE
  TO anon
  USING (bucket_id = 'site-assets');
