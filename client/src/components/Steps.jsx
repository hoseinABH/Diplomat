import React from 'react';
import {
  FaSignInAlt,
  FaClipboardList,
  FaCreditCard,
  FaShippingFast,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Steps = () => {
  const history = useHistory();
  const onRouteChange = (url) => {
    history.push(`/${url}`);
  };

  return (
    <div className="flex w-full flex-col items-center text-xs">
      <Link to="/">
        <img src={logo} className="w-40 my-3" alt="logo" />
      </Link>
      <IconContext.Provider value={{ color: '#2d3748', size: '25px' }}>
        <div className="flex max-w-lg w-full items-center justify-center space-x-8 sm:space-x-1 sm:justify-between mt-8">
          <button
            disabled
            className="hidden sm:flex flex-col items-center space-y-3 focus:outline-none "
          >
            <FaSignInAlt />
            ورود
          </button>
          <button
            onClick={() => onRouteChange('shipping')}
            className="flex flex-col items-center space-y-3 focus:outline-none"
          >
            <FaClipboardList />
            اطلاعات ارسال
          </button>
          <button
            onClick={() => onRouteChange('payment')}
            className="flex flex-col items-center space-y-3 focus:outline-none"
          >
            <FaCreditCard />
            پرداخت
          </button>
          <button
            onClick={() => onRouteChange('place-order')}
            className="flex flex-col items-center space-y-3 focus:outline-none"
          >
            <FaShippingFast />
            اتمام خرید و ارسال
          </button>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Steps;
