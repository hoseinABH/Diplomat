import React from 'react';
import deliver from '../assets/images/box.svg';
import support from '../assets/images/support.svg';
import pay from '../assets/images/pay.svg';
import guarantee from '../assets/images/grunte.svg';
import box from '../assets/images/original.svg';
const ConditionSection = ({ numbers }) => {
  const items =
    numbers === 5
      ? [
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
        ]
      : [
          {
            id: 1,
            src: deliver,
            alt: 'deliver',
            text: 'تحویل اکسپرس',
          },

          {
            id: 3,
            src: pay,
            alt: 'pay',
            text: 'پرداخت در محل',
          },
          {
            id: 2,
            src: support,
            alt: 'support',
            text: 'پشتیبانی شبانه روزی',
          },
        ];
  return (
    <div
      className={` ${
        numbers === 5
          ? 'bg-gray-300 border-t hidden border-gray-400  border-b w-full  md:flex  justify-center  py-8'
          : 'py-8 flex md:hidden  self-center mb-4'
      } `}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center mx-3 sm:mx-10"
        >
          <img
            className="w-12 h-12 sm:w-16 sm:h-16"
            src={item.src}
            alt={item.alt}
          />
          <span className="text-xs font-hairline sm:font-extrabold mt-2">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ConditionSection;
