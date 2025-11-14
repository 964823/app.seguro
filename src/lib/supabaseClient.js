import { createClient } from '@supabase/supabase-js';

// As credenciais do Supabase são carregadas a partir das variáveis de ambiente.
// Certifique-se de que seu arquivo .env na raiz do projeto contém:
// NEXT_PUBLIC_SUPABASE_URL=SUA_URL_DO_SUPABASE
// NEXT_PUBLIC_SUPABASE_ANON_KEY=SUA_CHAVE_ANONIMA

const supabaseUrl = import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Verifica se as variáveis de ambiente foram carregadas corretamente
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("As variáveis de ambiente do Supabase (NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY) não foram definidas.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
