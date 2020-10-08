import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row flex-wrap mx-auto sm:pt-20 px-0 sm:px-8 ">
      {children}
    </div>
  );
};

export default Layout;
