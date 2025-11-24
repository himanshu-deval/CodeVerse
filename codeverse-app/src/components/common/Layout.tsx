import React from 'react';
import Header from '@/components/common/Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gray-900 group/design-root overflow-x-hidden font-display">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-6xl px-4 flex-1">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
