import React from 'react';

const PageHeading = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-text-light dark:text-text-dark text-3xl font-black leading-tight tracking-[-0.033em]">Visão Geral</p>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">Welcome back, here is a summary of your platform's activity.</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary pl-4 pr-4 text-white">
          <p className="text-sm font-medium leading-normal">Last 7 Days</p>
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark pl-4 pr-4 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark">
          <p className="text-sm font-medium leading-normal">Last 30 Days</p>
        </button>
        <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark pl-4 pr-4 text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark">
          <p className="text-sm font-medium leading-normal">This Quarter</p>
        </button>
      </div>
    </div>
  );
};

export default PageHeading;
