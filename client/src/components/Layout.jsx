import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row flex-wrap mx-auto pt-0 sm:pt-20">
      {children}
    </div>
  );
};

export default Layout;
