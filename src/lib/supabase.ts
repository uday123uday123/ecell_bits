import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Client-side authentication mock state helper
export const getAuthUser = () => {
  const saved = localStorage.getItem('ecell_auth_user');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return null;
    }
  }
  return null;
};

export const setAuthUser = (user: { email: string; role: string; name: string } | null) => {
  if (user) {
    localStorage.setItem('ecell_auth_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('ecell_auth_user');
  }
};
