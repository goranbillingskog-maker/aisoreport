import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yvgxxynbbcfxbcermnly.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2Z3h4eW5iYmNmeGJjZXJtbmx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0MDExODQsImV4cCI6MjA3NTk3NzE4NH0.fYP-35pwqmDZ4RRwBA1NGcZ2W08iB0MwFA-uLGmOmR8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
