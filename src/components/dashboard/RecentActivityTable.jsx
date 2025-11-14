import React from 'react';

const RecentActivityTable = () => {
  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">Recent Activity</h3>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">A list of the latest validated jobs.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark" scope="col">Job ID</th>
              <th className="px-6 py-3 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark" scope="col">Shopkeeper Name</th>
              <th className="px-6 py-3 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark" scope="col">Service Type</th>
              <th className="px-6 py-3 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark" scope="col">Date</th>
              <th className="px-6 py-3 text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark" scope="col">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light dark:divide-border-dark">
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">#JOB-00124</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">Sunrise Mart</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">Electrical</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">2023-10-26</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm"><span className="inline-flex items-center rounded-full bg-positive-light/20 dark:bg-positive-dark/20 px-2 py-1 text-xs font-medium text-positive-light dark:text-positive-dark">Completed</span></td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">#JOB-00123</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">City Grocers</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">Plumbing</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">2023-10-25</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm"><span className="inline-flex items-center rounded-full bg-positive-light/20 dark:bg-positive-dark/20 px-2 py-1 text-xs font-medium text-positive-light dark:text-positive-dark">Completed</span></td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">#JOB-00122</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">The Corner Store</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">HVAC</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">2023-10-25</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm"><span className="inline-flex items-center rounded-full bg-positive-light/20 dark:bg-positive-dark/20 px-2 py-1 text-xs font-medium text-positive-light dark:text-positive-dark">Completed</span></td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-text-light dark:text-text-dark">#JOB-00121</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">Quick Stop</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">Electrical</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">2023-10-24</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm"><span className="inline-flex items-center rounded-full bg-positive-light/20 dark:bg-positive-dark/20 px-2 py-1 text-xs font-medium text-positive-light dark:text-positive-dark">Completed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-border-light dark:border-border-dark px-6 py-3">
        <button className="rounded-lg border border-border-light dark:border-border-dark px-3 py-1.5 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark">Previous</button>
        <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Page 1 of 10</span>
        <button className="rounded-lg border border-border-light dark:border-border-dark px-3 py-1.5 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark">Next</button>
      </div>
    </div>
  );
};

export default RecentActivityTable;
