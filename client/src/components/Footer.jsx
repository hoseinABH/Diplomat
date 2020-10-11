import React from 'react';
import deliver from '../assets/images/box.svg';
import support from '../assets/images/support.svg';
import pay from '../assets/images/pay.svg';
import guarantee from '../assets/images/grunte.svg';
import box from '../assets/images/original.svg';
import { Link } from 'react-router-dom';
import linkedin from '.././assets/images/in.svg';
import twitter from '.././assets/images/tw.svg';
import instagram from '.././assets/images/insta.svg';
import aparat from '.././assets/images/aparat.svg';
const Footer = () => {
  const items = [
    {
      id: 1,
      src: deliver,
      alt: 'deliver',
      text: 'تحویل اکسپرس',
    },
    {
      id: 2,
      src: support,
      alt: 'support',
      text: 'پشتیبانی شبانه روزی',
    },
    {
      id: 3,
      src: pay,
      alt: 'pay',
      text: 'پرداخت در محل',
    },
    {
      id: 4,
      src: guarantee,
      alt: 'guarantee',
      text: 'هفت روز ضمانت بازگشت',
    },
    {
      id: 5,
      src: box,
      alt: 'box',
      text: 'ضمانت اصل بودن کالا',
    },
  ];

  const footerLinkFirstCol = [
    {
      id: 1,
      text: 'نحوه ثبت سفارش',
    },
    {
      id: 2,
      text: 'رویه ارسال سفارش',
    },
    {
      id: 3,
      text: 'شیوه‌های پرداخت',
    },
  ];
  const footerLinkSecondCol = [
    {
      id: 1,
      text: 'پاسخ به پرسش‌های متداول',
    },
    {
      id: 2,
      text: 'رویه‌های بازگرداندن کالا',
    },
    {
      id: 3,
      text: 'شرایط استفاده',
    },
    {
      id: 4,
      text: 'حریم خصوصی',
    },
    {
      id: 5,
      text: 'گزارش باگ',
    },
  ];
  const footerLinkThirdCol = [
    {
      id: 1,
      text: 'اتاق خبر دیپلمات',
    },
    {
      id: 2,
      text: 'فروش در دیپلمات',
    },
    {
      id: 3,
      text: 'فرصت‌های شغلی ',
    },
    {
      id: 4,
      text: 'تماس با دیپلمات',
    },
    {
      id: 5,
      text: 'درباره دیپلمات',
    },
  ];

  const social = [
    {
      id: 1,
      src: linkedin,
      alt: 'linkeding',
    },
    {
      id: 2,
      src: twitter,
      alt: 'twitter',
    },
    {
      id: 3,
      src: instagram,
      alt: 'instagram',
    },
    {
      id: 4,
      src: aparat,
      alt: 'aparat',
    },
  ];
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="mt-12">
      <hr />
      <div
        className="flex items-center my-4 justify-center select-none"
        onClick={scrollTop}
      >
        <span className="text-xl font-bold cursor-pointer pl-2">
          برگشت به بالا
        </span>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          className="fill-current cursor-pointer"
        >
          <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 15l-5.247-6.44-5.263 6.44-.737-.678 6-7.322 6 7.335-.753.665z" />
        </svg>
      </div>
      <div className="w-full border-t border-gray-400 hidden md:flex  justify-center  py-8 bg-gray-300  border-b">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center mx-0 sm:mx-10 md:mx-6 lg:mx-4 xl:mx-10"
          >
            <img className="max-w-full w-3/6" src={item.src} alt={item.alt} />
            <span className="text-xs font-extrabold mt-2">{item.text}</span>
          </div>
        ))}
        <hr />
      </div>
      <div className="flex w-full items-start h-full px-8 py-6 md:bg-gray-300 flex-col-reverse md:flex-row ">
        <div className="flex h-full w-full md:w-4/6 justify-around flex-row ">
          <div className="flex flex-col items-start">
            <Link
              to="/"
              className="text-sm md:text-md font-semibold md:font-bold text-gray-700 pb-2"
            >
              راهنمای خرید از دیپلمات
            </Link>
            {footerLinkFirstCol.map((item) => (
              <Link
                key={item.id}
                to="/"
                className="text-xs md:text-sm font-hairline py-2 text-gray-700"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start">
            <Link
              to="/"
              className="text-sm md:text-md font-semibold md:font-bold text-gray-700 pb-2"
            >
              خدمات مشتریان
            </Link>
            {footerLinkSecondCol.map((item) => (
              <Link
                key={item.id}
                to="/"
                className="text-xs md:text-sm font-hairline py-2 text-gray-700"
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className=" flex-col items-start hidden md:flex">
            <Link
              to="/"
              className="text-sm md:text-md font-semibold md:font-bold text-gray-700 pb-2"
            >
              با دیپلمات
            </Link>
            {footerLinkThirdCol.map((item) => (
              <Link
                key={item.id}
                to="/"
                className="text-xs md:text-sm font-hairline py-2 text-gray-700"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        <div className=" h-full w-full md:w-2/6 flex-col space-y-8 flex  items-center">
          <div>
            <p className="text-sm">
              از تخفیف‌ها و جدیدترین‌های دیجی‌کالا باخبر شوید:
            </p>
            <form className="flex flex-col md:flex-row max-w-screen-lg pt-6 ">
              <input
                className="w-full md:w-56 border bg-gray-300 md:border-l-0 border-gray-500 rounded-md md:rounded-l-none text-sm px-4 py-2 focus:outline-none"
                type="email"
                placeholder="آدرس ایمیل خود را وارد کنید"
              />
              <button
                onClick={(e) => e.preventDefault()}
                className="mt-4 md:mt-0 bg-red-100 rounded-md  md:rounded-r-none px-4 py-2 border-none text-sm text-white focus:outline-none"
              >
                ارسال
              </button>
            </form>
          </div>
          <div className=" pb-16 md:mb-0 ">
            <p className="text-sm">
              دیپلمات را در شبکه‌های اجتماعی دنبال کنید:
            </p>
            <div className="flex pt-6 justify-center md:justify-start">
              {social.map((item) => (
                <img
                  className="hover:opacity-75 w-6 h-6 ml-6  hover:text-blue-500 cursor-pointer"
                  src={item.src}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
