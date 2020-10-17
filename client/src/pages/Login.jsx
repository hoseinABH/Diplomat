import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Button from '../components/Button';
import Input from '../components/Input';
import InputLabel from '../components/InputLabel';
const Login = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center  bg-white">
      <div className="sm:border sm:border-gray-300 2xl:border-none  rounded-lg max-w-sm w-full ">
        <div className="flex flex-col items-center py-12 px-6 ">
          <Link to="/">
            <img src={logo} alt="diplomat" />
          </Link>
          <h1 className="text-xl font-bold  flex-grow mt-6 mb-4  flex flex-col self-start">
            ورود
          </h1>
          <InputLabel>پست الکترونیک</InputLabel>
          <Input type="email" name="email" />
          <InputLabel>کلمه عبور</InputLabel>
          <Input type="password" name="password" />
          <Button>ورود به دیپلمات</Button>
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
