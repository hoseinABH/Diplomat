import React from 'react';
import Layout from '../components/Layout';
import quality from '../assets/images/quality.png';
import stock from '../assets/images/stock.png';
import deleteIcon from '../assets/images/delete.png';

const Cart = () => {
  return (
    <Layout>
      <div className="mt-auto sm:mt-32  mx-1  border-0 sm:border-t border-gray-300">
        <div className="flex flex-col md:flex-row w-full pt-8 pb-24 items-center ">
          <div className="w-full md:w-5/6 flex  items-start rounded-lg border py-10 px-3 bg-white border-gray-300">
            <img
              className="w-24 h-24 md:w-32 md:h-32"
              src="https://dkstatics-public.digikala.com/digikala-products/ed97aae370e4657ac7a82e663e50be30e9b91a28_1597133954.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90"
              alt="product"
            />

            <div className="flex flex-col mr-3">
              <h3 className="text-sm md:text-lg text-justify">
                گوشی موبایل سامسونگ مدل Galaxy A51 SM-A515F/DSN دو سیم کارت
                ظرفیت 128گیگابایت
              </h3>
              <div className="mt-4">
                <div className="flex  items-center">
                  <img src={quality} alt="quality" className="w-4 h-4 ml-4" />
                  <p className="text-xs sm:text-sm text-gray-900">
                    گارانتی ۱۸ ماهه ایده پردازان تجارت خاورمیانه
                  </p>
                </div>

                <div className="flex  items-center mt-2">
                  <img src={stock} alt="stock" className="w-4 h-4 ml-4" />
                  <p className="text-xs sm:text-sm text-gray-900">
                    موجود در انبار دیپلمات
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-8">
                <div className="text-xl flex items-center">
                  <button className="text-blue-500 border border-gray-400 rounded-l-none border-l-0  rounded py-px px-2 focus:outline-none">
                    &#43;
                  </button>
                  <span className="border border-gray-400 border-l-0 border-r-0 py-px px-4 text-blue-500">
                    5
                  </span>
                  <button className="text-blue-500 border border-gray-400 border-r-0 rounded-r-none rounded py-px px-2 focus:outline-none">
                    &#x2212;
                  </button>
                  <div className="flex mr-4 cursor-pointer">
                    <img src={deleteIcon} alt="delete" className="h-4 w-4" />
                    <p className="text-sm mr-px text-gray-500">حذف</p>
                  </div>
                </div>
                <div className="items-center hidden sm:flex">
                  <span className="text-gray-800">۸,۷۹۹,۰۰۰ </span>
                  <p className="text-xs">تومان</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/6 mt-4 md:mt-auto">
            <div className="flex flex-col px-4 py-5  bg-white m-auto  md:ml-2 md:mr-8 rounded-lg border border-gray-300">
              <div className="flex items-center text-sm justify-between text-gray-600">
                <p>قیمت کالاها (۱)</p>
                <p> ۸,۷۹۹,۰۰۰ تومان</p>
              </div>
              <div className="flex items-center mt-5 border justify-between border-gray-300 py-4 border-l-0 border-r-0 text-sm text-gray-900">
                <p>جمع</p>
                <p> ۸,۷۹۹,۰۰۰ تومان</p>
              </div>
              <div className="flex items-center mt-5 text-sm text-gray-900 justify-between">
                <p>مبلغ قابل پرداخت</p>
                <p> ۸,۷۹۹,۰۰۰ تومان</p>
              </div>
              <button className="mt-4 hidden md:block bg-red-100 text-sm text-white py-4  rounded-lg focus:outline-none">
                ادامه فرآیند خرید
              </button>
            </div>
          </div>
          <div className="w-full bg-white px-2 pb-1 flex  fixed bottom-0 items-center justify-between  md:hidden">
            <button className="my-4 bg-red-100 text-sm text-white p-2 rounded-lg focus:outline-none">
              ادامه فرآیند خرید
            </button>
            <div>
              <p className="text-xs text-gray-500">مبلغ قابل پرداخت</p>
              <p className="text-sm text-gray-800">۸,۷۹۹,۰۰۰ تومان</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
