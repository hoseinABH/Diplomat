import React from 'react';
import Layout from '../components/Layout';
import Message from '../components/Message';
import SummaryItem from '../components/SummaryItem';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderDetails } from '../redux/actions/orderActions';
import { FaCheckCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
const OrderDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, errors, loading } = orderDetails;

  React.useEffect(() => {
    dispatch(getOrderDetails(id));
  }, [dispatch, id]);
  return (
    <Layout>
      <div className="h-full bg-white mt-4 sm:mt-12 ">
        <>
          {errors && (
            <Message variant="Error" timer={3000}>
              {errors}
            </Message>
          )}
          {loading ? (
            <p>loading...</p>
          ) : (
            <div className="flex flex-col md:flex-row w-full pt-8 pb-24">
              <div className="flex flex-col space-y-6 w-full md:w-4/6">
                <div className="flex flex-col justify-center space-y-3  items-start my-5 px-6">
                  <h1>کد سفارش :{order._id}</h1>
                  <h4 className="text-lg font-semibold">اطلاعات فردی</h4>
                  <p>نام:{order.user.name}</p>
                  <p>
                    ایمیل
                    <a href={`mailto:${order.user.email}`}>
                      {' '}
                      {order.user.email}
                    </a>
                  </p>
                  <h4 className="text-lg font-semibold">اطلاعات ارسال</h4>
                  <p>
                    آدرس:{order.shippingAddress.state} ,{' '}
                    {order.shippingAddress.city} ,{' '}
                    {order.shippingAddress.address}
                  </p>
                  <p>کدپستی:{order.shippingAddress.postalCode}</p>
                </div>

                {order.isDelivered ? (
                  <div className="flex items-center px-6">
                    <IconContext.Provider
                      value={{ color: '#01923e', size: '18px' }}
                    >
                      <FaCheckCircle />
                    </IconContext.Provider>
                    <p className="m-1">
                      تحویل داده شده در تاریخ{order.DeliveredAt}
                    </p>
                  </div>
                ) : (
                  <p className="text-red-600 px-6">تحویل داده نشده </p>
                )}
                <div className="flex flex-col justify-center space-y-3 items-start px-6">
                  <h4 className="text-lg font-semibold">نحوه پرداخت</h4>
                  <p>
                    از طریق:{' '}
                    {localStorage
                      .getItem('paymentMethod')
                      .replace(/['"]+/g, '')}
                  </p>

                  {order.isPaid ? (
                    <div className="flex items-center justify-center">
                      <IconContext.Provider
                        value={{ color: '#01923e', size: '18px' }}
                      >
                        <FaCheckCircle />
                      </IconContext.Provider>
                      <p className="m-1">پرداخت شده در{order.paidAt}</p>
                    </div>
                  ) : (
                    <p className="text-red-600">پرداخت نشده </p>
                  )}
                </div>
                <div className="flex flex-col justify-center items-start px-6">
                  <h4 className="text-lg font-semibold">سفارشات</h4>
                </div>
                {order.orderItems.length === 0 ? (
                  <p>سفارشی وجود ندارد.</p>
                ) : (
                  order.orderItems.map((item, index) => (
                    <SummaryItem key={index} item={item} />
                  ))
                )}
              </div>
              <div className="w-full md:w-2/6 relative left-auto top-0 mt-12 ">
                <div className="flex flex-col px-4 py-5  bg-white m-auto  md:ml-2 md:mr-8 rounded-lg border-0 sm:border border-gray-300">
                  خلاصه سفارش
                  <div className="flex items-center mt-5 border justify-between border-gray-300 py-4 border-l-0 border-r-0 text-sm text-gray-900">
                    <p>جمع</p>
                    <p> {order.totalPrice} تومان</p>
                  </div>
                  <div className="flex items-center mt-5 text-sm text-gray-900 justify-between">
                    <p>مبلغ قابل پرداخت</p>
                    <p> {order.totalPrice} تومان</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    </Layout>
  );
};

export default OrderDetails;
