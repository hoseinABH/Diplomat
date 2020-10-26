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

const Steps = ({ step2, step3, step4 }) => {
  const history = useHistory();
  const onRouteChange = (url) => {
    history.push(`/${url}`);
  };

  return (
    <div className="flex w-full flex-col items-center text-xs">
      <Link to="/">
        <img src={logo} className="w-40 my-3" alt="logo" />
      </Link>
      <IconContext.Provider value={{ color: '#33333B', size: '25px' }}>
        <div className="flex max-w-lg w-full items-center justify-around  sm:space-x-1 sm:justify-between mt-8">
          <button
            disabled
            className="hidden sm:flex flex-col items-center space-y-3 focus:outline-none "
          >
            <FaSignInAlt />
            <p>ورود</p>
          </button>
          <button
            disabled={step2}
            onClick={() => onRouteChange('shipping')}
            className="flex flex-col items-center space-y-3 focus:outline-none"
          >
            <FaClipboardList />
            <p>اطلاعات ارسال</p>
          </button>
          <button
            disabled={step3}
            onClick={() => onRouteChange('payment')}
            className="flex flex-col items-center space-y-3 focus:outline-none"
          >
            <FaCreditCard />
            <p> پرداخت</p>
          </button>
          <button
            disabled={step4}
            onClick={() => onRouteChange('place-order')}
            className="flex flex-col items-center space-y-3 focus:outline-none"
          >
            <FaShippingFast />
            <p>اتمام خرید</p>
          </button>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Steps;
