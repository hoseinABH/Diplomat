import React from 'react';
import gif1 from '../assets/images/g1.gif';
import gif2 from '../assets/images/g2.gif';
const AdsGif = () => {
  return (
    <div className="flex flex-col h-full">
      <img className="rounded-lg pt-2 sm:pt-0" src={gif1} alt="ads gif" />
      <img
        className="rounded-lg  mt-2 hidden sm:block"
        src={gif2}
        alt="ads gif"
      />
    </div>
  );
};

export default AdsGif;
