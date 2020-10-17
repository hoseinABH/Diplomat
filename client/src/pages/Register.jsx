import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Button from '../components/Button';
import Input from '../components/Input';
import InputLabel from '../components/InputLabel';
const Register = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center  bg-white">
      <div className="sm:border sm:border-gray-300 2xl:border-none  rounded-lg max-w-sm w-full ">
        <div className="flex flex-col items-center py-2 px-6 ">
          <Link to="/">
            <img src={logo} alt="diplomat" />
          </Link>
          <h1 className="text-xl font-bold  flex-grow mt-6 flex flex-col self-start">
            ثبت نام
          </h1>
          <InputLabel> نام کاربری </InputLabel>
          <Input type="text" name="name" />
          <InputLabel>پست الکترونیک </InputLabel>
          <Input type="email" name="email" />
          <InputLabel>کلمه عبور</InputLabel>
          <Input type="password" name="email" />
          <InputLabel>تکرار کلمه عبور</InputLabel>
          <Input type="password" name="email" />
          <Button>ثبت نام در دیپلمات</Button>
          <p className="text-xs font-hairline text-center leading-5">
            با
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
