import React from 'react';

const CardSkeleton = () => {
  return (
    <div className="transition-all duration-300 flex w-full mx-2 lg:mx-auto  my-4 sm:my-auto sm:py-6 sm:w-1/2 md:w-1/3 lg:w-1/4 items-center p-4 max-w-sm ">
      <div className="animate-pulse flex flex-row sm:flex-col py-2 sm:py-0">
        <div className="rounded-md flex  self-start bg-gray-400 h-20 w-12 sm:h-40 sm:w-64 ml-2 sm:ml-auto"></div>
        <div className="flex flex-col space-y-4 py-0 sm:py-1 justify-start">
          <div className="h-4 bg-gray-400 rounded w-56"></div>
          <div className="space-y-2">
            <div className="h-4  bg-gray-400 rounded w-40"></div>
            <div className="h-4 bg-gray-400 rounded w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
