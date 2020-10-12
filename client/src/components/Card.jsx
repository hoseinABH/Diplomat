import React from 'react';
import { Link } from 'react-router-dom';
import product from '../assets/images/product.jpg';
import star from '../assets/images/star.png';
const Card = () => {
  return (
    <Link
      to={`/product/${1}`}
      className="transition-all duration-300 flex w-full px-4 py-0 sm:py-6 sm:w-1/2 md:w-1/3 lg:w-1/4  sm:mx-auto  flex-row sm:flex-col  items-center    border-gray-400 border border-opacity-75 border-b-0 border-l-0 border-r-0  justify-around sm:border sm:border-l-0 sm:border-b-0 hover:border-transparent hover:shadow-2xl"
    >
      <img
        className="max-w-full w-32 h-40 sm:w-48 sm:h-56  pt-8 "
        src={product}
        alt="Profile "
      />
      <div className="flex flex-col pb-4 py-16">
        <p className="text-sm leading-6">
          گوشی موبایل سامسونگ مدل Galaxy Note20 Ultra SM-N985F/DS دو سیم کارت
          ظرفیت
        </p>
        <div className="flex items-center flex-row-reverse  self-end mt-4">
          <img src={star} alt="rate" className="w-3 opacity-75 h-3  mr-1" />
          <p className="text-sm font-bold text-gray-500">
            (۷۱)<strong className="text-black mr-px">۴.۳</strong>
          </p>
        </div>
        <div className="flex self-end items-center mt-6 mb-4 text-black">
          <span className="font-bold">۳۱,۱۳۹,۰۰۰</span>
          <p className="mr-1 text-xs">تومان</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
