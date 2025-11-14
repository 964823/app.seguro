import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light p-4 dark:bg-background-dark font-display">
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[#111418] dark:text-white">
          Bem-vindo ao Dashboard!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Você está logado.
        </p>
        <button
          onClick={handleLogout}
          className="flex h-12 w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark"
        >
          <span className="truncate">Sair</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
