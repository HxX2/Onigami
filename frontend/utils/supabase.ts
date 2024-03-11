
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const supabase = createClient("https://zmnseamssdvlqexjdpgg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptbnNlYW1zc2R2bHFleGpkcGdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMzA0NTgsImV4cCI6MjAyMjkwNjQ1OH0.DGyXelWw8lA3R8nHkWnEYDzGU9yUGHSt5HorL1r7tOk", {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export async function checkLocalStorage() {
  try {
    const session = await AsyncStorage.getItem('sb-zmnseamssdvlqexjdpgg-auth-token');

    return session;
  } catch (error) {
    console.error('Error reading from local storage:', error);
  }
}