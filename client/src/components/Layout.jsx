import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row flex-wrap mx-auto sm:pt-2 px-0 sm:px-px ">
      {children}
    </div>
  );
};

export default Layout;
