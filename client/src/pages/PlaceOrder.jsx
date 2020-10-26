import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Steps from '../components/Steps';
import SummaryItem from '../components/SummaryItem';
import Message from '../components/Message';
import { createOrder } from '../redux/actions/orderActions';

const PlaceOrder = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;
  const { address, city, postalCode, state } = shippingAddress;
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const history = useHistory();

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed();

  const dispatch = useDispatch();

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, errors } = orderCreate;

  React.useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [history, success]);
  const onSubmitHandler = () => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress: shippingAddress,
        paymentMethod: localStorage
          .getItem('paymentMethod')
          .replace(/['"]+/g, ''),
        totalPrice: totalPrice,
      })
    );
  };

  return (
    <div className="h-full bg-white ">
      <div className="flex w-full flex-col items-center ">
        <Steps />
      </div>
      <>
        {errors && (
          <Message variant="Error" timer={3000}>
            {errors}
          </Message>
        )}
        <div className="flex flex-col md:flex-row w-full pt-8 pb-24">
          <div className="flex flex-col space-y-6 w-full md:w-4/6">
            <div className="flex flex-col justify-center space-y-3  items-start py-5 px-6">
              <h4 className="text-lg font-semibold">اطلاعات ارسال</h4>
              <p>
                آدرس:{state} , {city} , {address}
              </p>
              <p>کدپستی:{postalCode}</p>
            </div>
            <div className="flex flex-col justify-center space-y-3 items-start py-5 px-6">
              <h4 className="text-lg font-semibold">نحوه پرداخت</h4>
              <p>
                از طریق:{' '}
                {localStorage.getItem('paymentMethod').replace(/['"]+/g, '')}
              </p>
            </div>
            <div className="flex flex-col justify-center items-start px-6">
              <h4 className="text-lg font-semibold">سفارشات</h4>
            </div>
            {cartItems.map((item) => (
              <SummaryItem key={item.product} item={item} />
            ))}
          </div>
          <div className="w-full md:w-2/6 relative left-auto top-0 mt-12 ">
            <div className="flex flex-col px-4 py-5  bg-white m-auto  md:ml-2 md:mr-8 rounded-lg border border-gray-300">
              <div className="flex items-center text-sm justify-between text-gray-600">
                <p>قیمت کالاها ({totalQty})</p>
                <p>
                  {totalPrice}
                  تومان
                </p>
              </div>
              <div className="flex items-center mt-5 border justify-between border-gray-300 py-4 border-l-0 border-r-0 text-sm text-gray-900">
                <p>جمع</p>
                <p> {totalPrice} تومان</p>
              </div>
              <div className="flex items-center mt-5 text-sm text-gray-900 justify-between">
                <p>مبلغ قابل پرداخت</p>
                <p> {totalPrice} تومان</p>
              </div>
              <button
                onClick={onSubmitHandler}
                className="mt-4 hidden md:block bg-red-100 text-sm text-white py-4  rounded-lg focus:outline-none"
              >
                ثبت نهایی سفارش
              </button>
            </div>
          </div>
        </div>

        <div className="w-full bg-white px-6 pb-1 flex  fixed bottom-0 items-center justify-between  md:hidden">
          <button
            onClick={onSubmitHandler}
            className="my-4 bg-red-100 text-sm text-white p-2 rounded-lg focus:outline-none"
          >
            ثبت نهایی سفارش
          </button>
          <div>
            <p className="text-xs text-gray-500">مبلغ قابل پرداخت</p>
            <p className="text-sm text-gray-800">{totalPrice} تومان</p>
          </div>
        </div>
      </>
    </div>
  );
};

export default PlaceOrder;
