import React from 'react';
import Button from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { savePaymentMethod } from '../redux/actions/cartActions';
import { useHistory } from 'react-router-dom';
import Steps from '../components/Steps';

const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();

  const { shippingAddress } = cart;
  if (!shippingAddress) {
    history.push('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = React.useState('دیجی پی');

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/place-order');
  };

  return (
    <div className="h-screen bg-white">
      <div className="flex w-full flex-col items-center ">
        <Steps step4 />
        <h1 className="mt-8">شیوه پرداخت </h1>

        <form autoComplete="off" className="mt-4" onSubmit={submitHandler}>
          <label className="inline-flex items-center mt-3">
            <input
              type="radio"
              className="h-5 w-5 text-green-700"
              checked
              vaue="دیجی پی"
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="mr-2 text-gray-700">دیجــی پی</span>
          </label>
          <label className="inline-flex items-center mt-3 mr-4 ">
            <input
              type="radio"
              className="h-5 w-5 text-green-700"
              vaue="درمحل"
              name="paymentMethod"
              disabled
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="mr-2 text-gray-700">پرداخت در محل</span>
          </label>
          <Button type="submit">ادامه </Button>
        </form>
        <p className="max-w-lg px-4 text-justify text-xs sm:text-sm text-yellow-700">
          برای کاستن از احتمال انتقال ویروس کرونا پیشنهاد می‌کنیم از شیوه پرداخت
          اینترنتی استفاده کنید. در صورت انتخاب روش پرداخت در محل تنها امکان
          پرداخت با دستگاه کارتخوان مقدور است.
        </p>
      </div>
    </div>
  );
};

export default Payment;
