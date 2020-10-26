import React from 'react';
import { Link } from 'react-router-dom';

const SummaryItem = ({ item }) => {
  return (
    <div className="flex items-center py-5 px-2">
      <img
        className="w-16 h-16 md:w-24 md:h-24"
        src={item.image}
        alt={item.name}
      />

      <div className="flex flex-col mr-3">
        <Link
          to={`/product/${item.product}`}
          className="text-xs lg:text-sm text-justify pl-8"
        >
          {item.name}
        </Link>
        <div className="flex  items-center ">
          <span>X{item.qty}</span>
          <span className="text-gray-800">{item.price} </span>
          <p className="text-xs">تومان</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;
