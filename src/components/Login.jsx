import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error message

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light p-4 dark:bg-background-dark font-display">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <svg className="h-10 w-auto text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.438.995s.145.755.438.995l1.003.827c.48.398.668 1.03.26 1.431l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.063-.374-.313-.686-.645-.87a6.52 6.52 0 01-.22-.127c-.324-.196-.72-.257-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.437-.995s-.145-.755-.437-.995l-1.004-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.133.75.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[#111418] dark:text-white">Bem-vindo de volta</h1>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-background-dark sm:p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="pb-2 text-base font-medium text-[#111418] dark:text-gray-300" htmlFor="email">Email ou Usuário</label>
              <input
                className="form-input h-14 w-full flex-1 resize-none rounded-lg border border-[#dbe0e6] bg-white p-[15px] text-base font-normal leading-normal text-[#111418] placeholder:text-[#617589] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary/30"
                id="email"
                placeholder="Digite seu email ou usuário"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-2 text-base font-medium text-[#111418] dark:text-gray-300" htmlFor="password">Senha</label>
              <div className="relative flex w-full flex-1 items-stretch">
                <input
                  className="form-input h-14 w-full flex-1 resize-none rounded-lg rounded-r-none border-r-0 border-[#dbe0e6] bg-white p-[15px] pr-2 text-base font-normal leading-normal text-[#111418] placeholder:text-[#617589] focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary dark:focus:ring-primary/30"
                  id="password"
                  placeholder="Digite sua senha"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  aria-label="Toggle password visibility"
                  className="flex cursor-pointer items-center justify-center rounded-r-lg border border-l-0 border-[#dbe0e6] bg-white px-4 text-[#617589] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  <span className="material-symbols-outlined text-2xl">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {errorMessage && (
              <div className="text-center text-red-500">{errorMessage}</div>
            )}

            <div className="pt-2">
              <button
                className="flex h-12 w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark"
                type="submit"
              >
                <span className="truncate">Entrar</span>
              </button>
            </div>
            <div className="text-center">
              <a className="text-sm font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50" href="#">
                Esqueceu a Senha?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
