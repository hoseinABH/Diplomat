import React from 'react';

const OrderSkeleton = () => {
  const orderItems = [1, 2, 3];
  return (
    <>
      <div className="flex flex-col md:flex-row w-full pt-8 pb-24 animate-pulse">
        <div className="flex flex-col space-y-6 w-full md:w-4/6">
          <div className="flex flex-col justify-center space-y-3  items-start my-5 px-6">
            <div className="bg-gray-400 w-4/6 h-4 rounded mt-1"></div>

            <div className="bg-gray-400 w-3/6 h-3 rounded mt-1"></div>
            <div className="bg-gray-400 w-3/6 h-3 rounded mt-1"></div>

            <div className="bg-gray-400 w-4/6 h-3 rounded mt-1"></div>
            <div className="bg-gray-400 w-4/6 h-3 rounded mt-1"></div>

            <div className="bg-gray-400 w-3/6 h-4 rounded mt-1"></div>
          </div>

          <div className="flex flex-col justify-center space-y-3 items-start px-6">
            <div className="bg-gray-400 w-4/6 h-4 rounded mt-1"></div>
            <div className="bg-gray-400 w-3/6 h-3 rounded mt-1"></div>
            <div className="bg-gray-400 w-2/6 h-3 rounded mt-1"></div>
          </div>

          {orderItems.map((item, index) => (
            <div
              key={index}
              className="flex w-full mx-2  my-4  items-center p-4 max-w-sm "
            >
              <div className="animate-pulse flex flex-row w-full items-center  py-2 ">
                <div className="rounded-md flex  self-start bg-gray-400 h-16 w-12 ml-2"></div>
                <div className="flex flex-col w-full space-y-4 py-0 sm:py-1 justify-start">
                  <div className="h-3 bg-gray-400 rounded w-5/6"></div>
                  <div className="space-y-2">
                    <div className="h-2  bg-gray-400 rounded w-40"></div>
                    <div className="h-2 bg-gray-400 rounded w-32"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-2/6 relative left-auto top-0 mt-12 ">
          <div className="flex flex-col px-4 py-5 mx-8  bg-white m-auto  md:ml-2 md:mr-8 rounded-lg border-0 sm:border border-gray-300">
            <div className="bg-gray-400 h-3 rounded mt-1"></div>

            <div className=" mt-5 borderborder-gray-300 py-4 border-l-0 border-r-0">
              <div className="bg-gray-400  h-3 rounded mt-1"></div>
            </div>
            <div className=" mt-5 ">
              <div className="bg-gray-400  h-3 rounded mt-1"></div>
            </div>
            <div className="mt-10 rounded-md self-center bg-gray-400 w-64 h-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSkeleton;
