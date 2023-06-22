
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://kvupkucjcybfexbeuymd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2dXBrdWNqY3liZmV4YmV1eW1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODczNjg4NzAsImV4cCI6MjAwMjk0NDg3MH0.8tVZ72K8mjuLreYokOoBm7lWHxbDUKJxw-0k9rRtKVo')

