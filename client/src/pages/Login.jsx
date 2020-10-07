import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
const Login = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center  bg-white">
      <div className="sm:border sm:border-gray-300 2xl:border-none  rounded-lg max-w-sm w-full ">
        <div className="flex flex-col items-center py-12 px-6 ">
          <Link to="/">
            <img src={logo} alt="diplomat" />
          </Link>
          <div className="mt-6 mb-4 flex flex-col self-start">
            <h1 className="text-xl font-bold  flex-grow">ورود</h1>
            <p className=" mt-1 text-xs font-hairline">
              لطفا پست الکترونیک خود را وارد کنید
            </p>
          </div>
          <input
            type="email"
            name="email"
            className="border border-gray-300 rounded-lg  w-full focus:outline-none h-10 p-2 focus:border-red-100"
          />

          <button className="w-full bg-red-100 text-white rounded-lg text-sm py-3 px-16  my-6 focus:outline-none">
            ورود به دیپلمات
          </button>
          <p className="text-xs font-hairline text-center leading-5">
            با ورود و یا{' '}
            <Link to="/register" className="text-red-100 font-extrabold">
              ثبت نام
            </Link>{' '}
            در دیپلمات شما شرایط و قوانین استفاده از سرویس های سایت دیپلمات و
            قوانین حریم خصوصی آن را می‌پذیرید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
