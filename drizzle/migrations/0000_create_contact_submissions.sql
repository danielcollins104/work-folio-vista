CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  topic TEXT NOT NULL DEFAULT '',
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX contact_submissions_email_created_idx ON public.contact_submissions (lower(email), created_at);

CREATE OR REPLACE FUNCTION public.contact_is_throttled(_email text)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT count(*) >= 5
  FROM public.contact_submissions
  WHERE lower(email) = lower(_email)
    AND created_at > now() - interval '10 minutes';
$$;

GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitors can send one inquiry"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (NOT public.contact_is_throttled(email));