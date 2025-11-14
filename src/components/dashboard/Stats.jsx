import React from 'react';

const Stats = () => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col gap-2 rounded-xl bg-card-light dark:bg-card-dark p-6 border border-border-light dark:border-border-dark">
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-medium leading-normal">Total de Lojistas</p>
        <p className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight">1,204</p>
        <p className="text-positive-light dark:text-positive-dark text-sm font-medium leading-normal">+5.2%</p>
      </div>
      <div className="flex flex-col gap-2 rounded-xl bg-card-light dark:bg-card-dark p-6 border border-border-light dark:border-border-dark">
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-medium leading-normal">Chamados Validados</p>
        <p className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight">832</p>
        <p className="text-positive-light dark:text-positive-dark text-sm font-medium leading-normal">+12.1%</p>
      </div>
      <div className="flex flex-col gap-2 rounded-xl bg-card-light dark:bg-card-dark p-6 border border-border-light dark:border-border-dark">
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-medium leading-normal">Receita Bruta</p>
        <p className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight">R$ 85.430,50</p>
        <p className="text-positive-light dark:text-positive-dark text-sm font-medium leading-normal">+8.5%</p>
      </div>
      <div className="flex flex-col gap-2 rounded-xl bg-card-light dark:bg-card-dark p-6 border border-border-light dark:border-border-dark">
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-medium leading-normal">Custo Total</p>
        <p className="text-text-light dark:text-text-dark tracking-tight text-3xl font-bold leading-tight">R$ 32.115,20</p>
        <p className="text-negative-light dark:text-negative-dark text-sm font-medium leading-normal">-2.3%</p>
      </div>
    </div>
  );
};

export default Stats;
