import React from 'react';

const ProfileSkeleton = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row mt-6">
      <div className="w-full sm:w-1/2  flex flex-col  border-0   sm:border-l border-gray-400 p-2">
        <div className="w-full border-0 border-b  pb-4 border-gray-400 flex justify-between items-start">
          <div className="flex w-full bg-gray-400  h-12 rounded mt-2 animate-pulse"></div>
        </div>
        <div className="flex w-full bg-gray-400  h-12 rounded mt-2 animate-pulse"></div>
      </div>
      <div className="w-full sm:w-1/2 flex justify-between items-start p-2">
        <div className="flex w-full flex-col space-y-1  sm:border-b border-b-0 pb-4 border-gray-400">
          <div className="flex w-full bg-gray-400  h-12 rounded mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
