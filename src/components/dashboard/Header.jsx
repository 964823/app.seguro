import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark px-6 py-3 lg:px-10">
      <div className="flex items-center gap-4">
        <div className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_319)">
              <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
            </g>
            <defs>
              <clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">Maintenance Platform</h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-secondary-light dark:text-text-secondary-dark">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User profile picture" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAU1h348Y8vP_SjaiVkKmbvBW0MJoP-Dt80JXIOUbMdf6FCjx6C_1KsvLmdyik_LfjuZe2H_ZLtisQNL3QTWcwlFluf4sf3OawJSKj1g-ba2mb5OJ_VLCV3J3gOSZquRS-el9ak3F6lHMIamA2KpzPZF98cgn9IrN-SOm7bw4aZ_aw_6K4TXWr652s-t-xs9uGq0vZ46t-hxuYh7cfgktQacxYkzpMsO12sNhCt9DQA0ZLvfanTorQzYenlVj-Vu4BcBUNTulSRyCcl")'}}></div>
      </div>
    </header>
  );
};

export default Header;
