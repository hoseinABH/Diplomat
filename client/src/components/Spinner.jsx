import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 sm:h-20 sm:w-20 border-t-2 border-b-2 border-red-100"></div>
    </div>
  );
};

export default Spinner;
