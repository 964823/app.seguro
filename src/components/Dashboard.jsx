import React from 'react';
import Header from './dashboard/Header';
import PageHeading from './dashboard/PageHeading';
import Stats from './dashboard/Stats';
import Charts from './dashboard/Charts';
import RecentActivityTable from './dashboard/RecentActivityTable';

const Dashboard = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <PageHeading />
          <Stats />
          <Charts />
          <RecentActivityTable />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
