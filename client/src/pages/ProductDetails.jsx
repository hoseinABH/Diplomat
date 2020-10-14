import React from 'react';
import Layout from '../components/Layout';
import star from '../assets/images/star.png';
import store from '../assets/images/store.png';
import quality from '../assets/images/quality.png';
import stock from '../assets/images/stock.png';
const ProductDetails = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [inStock] = React.useState(true);
  return (
    <Layout>
      <div className="mt-6 sm:mt-24 bg-white mx-2 border border-gray-300">
        <div className="flex flex-col md:flex-row w-full pt-8 pb-24 items-center  px-3">
          <div className="mt-12 w-full md:w-1/3  order-2 md:order-1 flex flex-col items-center md:items-start">
            <img className="w-64 h-64" src="#" alt="product" />

            <p className="text-sm mt-6 text-justify block md:hidden leading-6 font-hairline text-gray-900">
              سامسونگ گوشی جدید سری A خود را با نام «A31» در تاریخ 27 آوریل 2020
              معرفی کرد. این سری از تولیدات سامسونگ به داشتن صفحه‌نمایش بسیار با
              کیفیت AMOLED و دوربین‌هایی با امکانات بالا شهرت دارند. گوشی موبایل
              Galaxy A31با صفحه‌نمایش سوپر آمولد طراحی شده است و ظاهر هم زیبایی
              دارد. سامسونگ تلاش کرده است حاشیه را در این تولید جدید خود تا حد
              امکان کم کند. قاب جلویی آن را یک نمایشگر تمام صفحه پوشانده که
              البته جلوه‌ی زیبایی هم به آن داده است.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col order-1 md:order-2 justify-center">
            <h6 className="text-sm leading-7 md:leading-5 md:text-md font-semibold text-gray-900">
              گوشی موبایل سامسونگ مدل Galaxy A31 SM-A315F/DS دو سیم کارت ظرفیت
              128 گیگابایت
            </h6>

            <p className="text-sm pt-6 pb-2">
              Samsung Galaxy A31 SM-A315F/DS Dual SIM 128GB Mobile Phone
            </p>
            <div className="flex items-center  self-start mb-4">
              <img src={star} alt="rate" className="w-4 h-4 mb-1" />
              <p className="text-sm text-gray-500">۴.۳(۷۱)</p>
            </div>
            <p className="text-sm hidden md:block leading-6 font-hairline text-gray-600">
              سامسونگ گوشی جدید سری A خود را با نام «A31» در تاریخ 27 آوریل 2020
              معرفی کرد. این سری از تولیدات سامسونگ به داشتن صفحه‌نمایش بسیار با
              کیفیت AMOLED و دوربین‌هایی با امکانات بالا شهرت دارند. گوشی موبایل
              Galaxy A31با صفحه‌نمایش سوپر آمولد طراحی شده است و ظاهر هم زیبایی
              دارد. سامسونگ تلاش کرده است حاشیه را در این تولید جدید خود تا حد
              امکان کم کند. قاب جلویی آن را یک نمایشگر تمام صفحه پوشانده که
              البته جلوه‌ی زیبایی هم به آن داده است.
            </p>
          </div>
          {inStock ? (
            <div className="w-1/3 hidden md:flex lg:block order-1 md:order-3 ">
              <div className="flex flex-col px-4 py-5  bg-gray-200 ml-6 mr-16 rounded-lg border border-gray-300">
                <div className="flex  items-center ">
                  <img src={store} alt="store" className="w-5 h-5 ml-4" />
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-900">فروشنده : دیپلمات</p>
                    <p className="text-sm text-blue-400 mt-1">
                      عملکرد ۴.۸ از ۵
                    </p>
                  </div>
                </div>
                <div className="flex  items-center mt-6 border border-gray-300 py-4 border-l-0 border-r-0">
                  <img src={quality} alt="quality" className="w-5 h-5 ml-4" />
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-900">
                      گارانتی ۱۸ ماهه ایده پردازان تجارت خاورمیانه
                    </p>
                  </div>
                </div>
                <div className="flex  items-center mt-6">
                  <img src={stock} alt="stock" className="w-5 h-5 ml-4" />
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-900">
                      موجود در انبار دیپلمات
                    </p>
                  </div>
                </div>
                <div className="flex items-center self-end mt-6 text-red-100 font-bold">
                  <span className="text-2xl">۷,۱۵۰,۰۰۰</span>
                  <p className="mr-2">تومان</p>
                </div>
                <button className="mt-4 bg-red-100 text-md text-white p-4 rounded-lg focus:outline-none">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          ) : (
            <div className="w-1/3">
              <div className="flex flex-col px-4 py-5  bg-gray-200 ml-6 mr-16 rounded-lg border border-gray-300">
                <div className="flex flex-col  text-gray-600">
                  <h6 className="text-lg text-center">ناموجود</h6>
                  <p className="text-sm mt-4">
                    متاسفانه این کالا در حال حاضر موجود نیست. می‌توانید از طریق
                    لیست بالای صفحه، از محصولات مشابه این کالا دیدن نمایید
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="w-screen bg-white px-2 pb-1 flex  fixed bottom-0  md:hidden  justify-center ">
            <button className="mt-4 mx-24 min-w-full bg-red-100 text-md text-white p-4 rounded-lg focus:outline-none">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
