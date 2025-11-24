import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
        <p className="mt-4 mb-8 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
        <a href="/" className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100">Back to homepage</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
