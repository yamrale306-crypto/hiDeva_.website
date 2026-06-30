// Supabase configuration
window.SUPABASE_CONFIG = {
  url: 'https://weukzfduqslszpasrlfk.supabase.co',
  anonKey: 'sb_publishable_XWigC2CqUek-AGayiuA0BA_TPL9nkib',
};

// Initialize Supabase client
async function initSupabase() {
  if (window.supabase) return window.supabase;
  
  const { createClient } = supabase;
  const client = createClient(window.SUPABASE_CONFIG.url, window.SUPABASE_CONFIG.anonKey);
  window.supabase = client;
  return client;
}

// Simple auth helper
window.auth = {
  signUp: async (email, password) => {
    const client = await initSupabase();
    const { data, error } = await client.auth.signUp({ email, password });
    return { data, error };
  },
  signIn: async (email, password) => {
    const client = await initSupabase();
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    return { data, error };
  },
  signOut: async () => {
    const client = await initSupabase();
    const { error } = await client.auth.signOut();
    return { error };
  },
  getUser: async () => {
    const client = await initSupabase();
    const { data: { user } } = await client.auth.getUser();
    return user;
  },
};

// Database helper
window.db = {
  subscribe: async (email) => {
    const client = await initSupabase();
    const { data, error } = await client.from('subscribers').insert({ email });
    return { data, error };
  },
};