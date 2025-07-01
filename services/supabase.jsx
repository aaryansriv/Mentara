import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient("https://fttcqqfizwcarxwgvmmi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0dGNxcWZpendjYXJ4d2d2bW1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczNDI1NTYsImV4cCI6MjA2MjkxODU1Nn0.nXRQdNg6FYRczq78Jo47gQr85CdkWdOidfeMplBCVno")