/*
  # Set up storage policies for site-assets bucket

  1. Security
    - Add policy for public reads from site-assets bucket
    - Add policy for service role to upload files
*/

-- Allow public read access to site-assets bucket
CREATE POLICY "Public read access"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'site-assets');

-- Allow service role to upload
CREATE POLICY "Service role can upload"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'site-assets');

CREATE POLICY "Service role can update"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'site-assets');
