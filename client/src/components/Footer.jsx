import React from 'react';
import deliver from '../assets/images/deliver.png';
import support from '../assets/images/support.png';
import pay from '../assets/images/pay.png';
import guarantee from '../assets/images/guarantee.png';
import box from '../assets/images/box.png';
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
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="mt-12">
      <hr />
      <div
        className="flex items-center my-4 justify-center"
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
      <div className="w-full border-t border-gray-400 hidden sm:flex  justify-center  py-8 bg-gray-300  border-b">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center px-auto sm:px-6"
          >
            <img className="w-16" src={item.src} alt={item.alt} />
            <span className="text-xs font-extrabold mt-2">{item.text}</span>
          </div>
        ))}
        <hr />
      </div>
    </footer>
  );
};

export default Footer;
