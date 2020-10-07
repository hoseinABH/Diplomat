import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';

const Home = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Layout>
      {cards.map((item) => (
        <Card key={item} />
      ))}
    </Layout>
  );
};

export default Home;
