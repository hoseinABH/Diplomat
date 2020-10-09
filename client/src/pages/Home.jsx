import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import AdsGif from '../components/AdsGif';
const Home = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className="h-full  w-full flex items-start flex-col sm:flex-row sm:pt-20 ">
        <div className="w-full sm:w-2/3 p-0 sm:p-2 mx-auto ">
          <Carousel />
        </div>
        <div className="w-full sm:w-1/3 p-0 sm:p-2 mx-auto">
          <AdsGif />
        </div>
      </div>
      <Layout>
        {cards.map((item) => (
          <Card key={item} />
        ))}
      </Layout>
    </>
  );
};

export default Home;
