import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import AdsGif from '../components/AdsGif';
const Home = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="h-full  w-full flex items-start flex-col md:flex-row sm:pt-20 ">
        <div className="w-full md:w-2/3 p-0 md:p-2 mx-auto ">
          <Carousel />
        </div>
        <div className="w-full md:w-1/3 p-0 md:p-2 mx-auto">
          <AdsGif />
        </div>
      </div>
      <Layout>
        <div className="flex  px-6 flex-col flex-wrap pt-6 justify-center ">
          <h1 className=" text-black font-semibold text-lg">آخرین محصولات</h1>
          <div className=" w-32 h-little bg-red-100 mt-2"></div>
        </div>

        <div className="flex flex-row flex-wrap  mt-8  bg-white pb-16  justify-center mx-3 sm:mx-4 rounded-md">
          {cards.map((item) => (
            <Card key={item} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Home;
