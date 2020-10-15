import React from 'react';
import Layout from './Layout';

const ProductDetailSkeleton = () => {
  return (
    <Layout>
      <div className="mt-6 sm:mt-24 bg-white mx-2 border border-gray-300">
        <div className="flex flex-col md:flex-row w-full pt-8 pb-24 items-center  px-3 animate-pulse">
          <div className="mt-12  w-full md:w-1/3  order-2 md:order-1 flex flex-col items-center">
            <div className="w-40 h-64 bg-gray-400 rounded-lg"></div>
            <div className="w-full mt-6 flex md:hidden flex-col  items-center">
              <div className="bg-gray-400 w-5/6 h-3 rounded mt-1"></div>
              <div className="bg-gray-400 w-5/6 h-3 rounded mt-1"></div>
              <div className="bg-gray-400 w-5/6 h-3 rounded mt-1"></div>
              <div className="bg-gray-400 w-5/6 h-3 rounded mt-1"></div>
              <div className="bg-gray-400 w-5/6 h-3 rounded mt-1"></div>
              <div className="bg-gray-400 w-5/6 h-3 rounded mt-1"></div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col order-1 md:order-2 justify-center">
            <div className="bg-gray-400 w-full h-5  my-4 rounded mt-1 "></div>
            <div className="bg-gray-400 w-full h-5  my-4 rounded mt-1 "></div>
            <div className="hidden md:block">
              <div className="bg-gray-400 w-5/6 h-3 rounded mt-1"></div>
              <div className="bg-gray-400 w-4/6 h-3 rounded mt-1"></div>
              <div className="bg-gray-400 w-5/6 h-3 rounded mt-1"></div>
              <div className="bg-gray-400 w-3/6 h-3 rounded mt-1"></div>
              <div className="bg-gray-400 w-5/6 h-3 rounded mt-1"></div>
              <div className="bg-gray-400 w-4/6 h-3 rounded mt-1"></div>
            </div>
          </div>

          <div className="lg:w-1/3 hidden md:flex lg:block order-1 md:order-3 w-1/2">
            <div className="flex flex-col px-4 py-5  ml-6 mr-16 rounded-lg border border-gray-300  ">
              <div className="flex items-center">
                <div className="rounded-full bg-gray-400 h-8 w-8"></div>
                <div className="flex flex-col mr-3">
                  <div className="bg-gray-400 w-40 h-3 rounded"></div>
                  <div className="bg-gray-400 w-32 h-3 rounded mt-1"></div>
                </div>
              </div>
              <div className="flex items-center mt-6 border border-gray-300 py-4 border-l-0 border-r-0">
                <div className="rounded-full bg-gray-400 h-8 w-8"></div>
                <div className="mr-3">
                  <div className="bg-gray-400 w-40 h-3 rounded"></div>
                </div>
              </div>
              <div className="flex items-center mt-6">
                <div className="rounded-full bg-gray-400 h-8 w-8"></div>
                <div className="mr-3">
                  <div className="bg-gray-400 w-40 h-3 rounded"></div>
                </div>
              </div>
              <div className="flex items-center self-end mt-6">
                <div className="bg-gray-400 w-40 h-4 rounded"></div>
              </div>
              <div className="mt-5 rounded-md self-center bg-gray-400 w-64 h-12"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailSkeleton;
