import React from 'react';

const Charts = () => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="flex flex-col gap-2 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 lg:col-span-2">
        <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Receita vs. Custos</p>
        <p className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight truncate">R$ 53.315,30 Lucro</p>
        <div className="flex gap-1">
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">Last 30 Days</p>
          <p className="text-positive-light dark:text-positive-dark text-sm font-medium leading-normal">+8.5%</p>
        </div>
        <div className="flex min-h-[240px] flex-1 flex-col gap-8 py-4">
          <svg className="h-full" fill="none" preserveAspectRatio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#617589" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="3"></path>
            <path d="M0 70C18.1538 70 18.1538 40 36.3077 40C54.4615 40 54.4615 60 72.6154 60C90.7692 60 90.7692 110 108.923 110C127.077 110 127.077 50 145.231 50C163.385 50 163.385 120 181.538 120C199.692 120 199.692 80 217.846 80C236 80 236 60 254.154 60C272.308 60 272.308 140 290.462 140C308.615 140 308.615 110 326.769 110C344.923 110 344.923 20 363.077 20C381.231 20 381.231 90 399.385 90C417.538 90 417.538 140 435.692 140C453.846 140 453.846 40 472 40V150H0V70Z" fill="url(#paint0_linear_1131_5935)"></path>
            <path d="M0 70C18.1538 70 18.1538 40 36.3077 40C54.4615 40 54.4615 60 72.6154 60C90.7692 60 90.7692 110 108.923 110C127.077 110 127.077 50 145.231 50C163.385 50 163.385 120 181.538 120C199.692 120 199.692 80 217.846 80C236 80 236 60 254.154 60C272.308 60 272.308 140 290.462 140C308.615 140 308.615 110 326.769 110C344.923 110 344.923 20 363.077 20C381.231 20 381.231 90 399.385 90C417.538 90 417.538 140 435.692 140C453.846 140 453.846 40 472 40" stroke="#137fec" strokeLinecap="round" strokeWidth="3"></path>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1131_5935" x1="236" x2="236" y1="20" y2="150">
                <stop stopColor="#137fec" stopOpacity="0.2"></stop>
                <stop offset="1" stopColor="#137fec" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="flex justify-around">
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-[13px] font-bold leading-normal tracking-[0.015em]">Week 1</p>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-[13px] font-bold leading-normal tracking-[0.015em]">Week 2</p>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-[13px] font-bold leading-normal tracking-[0.015em]">Week 3</p>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-[13px] font-bold leading-normal tracking-[0.015em]">Week 4</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
        <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">Jobs by Category</p>
        <div className="flex h-full min-h-[200px] items-center justify-center">
          <div className="relative size-48">
            <svg className="size-full" viewBox="0 0 36 36">
              <path className="stroke-slate-200 dark:stroke-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
              <path className="stroke-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="45, 100" strokeLinecap="round" strokeWidth="3"></path>
              <path className="stroke-orange-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="30, 100" strokeDashoffset="-45" strokeLinecap="round" strokeWidth="3"></path>
              <path className="stroke-teal-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="25, 100" strokeDashoffset="-75" strokeLinecap="round" strokeWidth="3"></path>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-text-light dark:text-text-dark">832</span>
              <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Total</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="size-2.5 rounded-full bg-primary"></div>
              <span>Electrical</span>
            </div>
            <span className="font-medium">45%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="size-2.5 rounded-full bg-orange-500"></div>
              <span>Plumbing</span>
            </div>
            <span className="font-medium">30%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="size-2.5 rounded-full bg-teal-500"></div>
              <span>HVAC</span>
            </div>
            <span className="font-medium">25%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
