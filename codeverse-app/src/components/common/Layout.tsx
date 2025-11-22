import React from 'react';
import Header from '@/components/common/Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
