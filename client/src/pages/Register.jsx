import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Input from '../components/Input';
const Register = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center  bg-white">
      <div className="sm:border sm:border-gray-300 2xl:border-none  rounded-lg max-w-sm w-full ">
        <div className="flex flex-col items-center py-12 px-6 ">
          <Link to="/">
            <img src={logo} alt="diplomat" />
          </Link>
          <div className="mt-6 flex flex-col self-start">
            <h1 className="text-xl font-bold  flex-grow">ثبت نام</h1>
            <p className="mt-6 mb-1 text-xs font-hairline pr-1"> نام کاربری </p>
          </div>
          <Input type="text" name="name" />
          <p className="mt-6 mb-1 text-xs font-hairline pr-1 flex self-start">
            {' '}
            پست الکترونیک{' '}
          </p>
          <Input type="email" name="email" />

          <button className="w-full bg-red-100 text-white rounded-lg text-sm py-3 px-16  my-6 focus:outline-none">
            ثبت نام در دیپلمات
          </button>
          <p className="text-xs font-hairline text-center leading-5">
            با{' '}
            <Link to="/login" className="text-red-100 font-extrabold">
              ورود
            </Link>{' '}
            و یا ثبت نام در دیپلمات شما شرایط و قوانین استفاده از سرویس های سایت
            دیپلمات و قوانین حریم خصوصی آن را می‌پذیرید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
