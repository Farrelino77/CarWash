// src/config/supabase.js
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://uuiikeqvjbawyucywtci.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1aWlrZXF2amJhd3l1Y3l3dGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzNjk4MzAsImV4cCI6MjA0ODk0NTgzMH0.PPpeLGV747BF5c9aPiOVL-2GhDcNizwFB8O41ma_yJY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});