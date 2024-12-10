// config.js
const supabaseUrl = 'https://uuiikeqvjbawyucywtci.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1aWlrZXF2amJhd3l1Y3l3dGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzNjk4MzAsImV4cCI6MjA0ODk0NTgzMH0.PPpeLGV747BF5c9aPiOVL-2GhDcNizwFB8O41ma_yJY';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleString();
}