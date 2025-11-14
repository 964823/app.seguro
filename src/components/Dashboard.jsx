import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[#111418] dark:text-white">
          Welcome to the Dashboard!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          You have successfully logged in.
        </p>
        <button
          onClick={handleLogout}
          className="flex h-12 w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
