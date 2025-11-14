import { createClient } from '@supabase/supabase-js';

// As credenciais do Supabase devem ser armazenadas em variáveis de ambiente.
// Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
// VITE_SUPABASE_URL=SUA_URL_DO_SUPABASE
// VITE_SUPABASE_ANON_KEY=SUA_CHAVE_ANONIMA

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xyz.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
