import React from 'react';
import Layout from '../components/Layout';
import basket from '../assets/images/basket.png';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import CartItem from '../components/CartItem';
const Cart = () => {
  const [affix, showAffix] = React.useState(true);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  React.useEffect(() => {
    if (id) {
      dispatch(addToCart(id, 1));
    }
  }, [dispatch, id]);
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    let scrollPct = document.body.scrollHeight - window.pageYOffset;
    if (scrollPct < 1200) {
      showAffix(false);
    } else {
      showAffix(true);
    }
  };
  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed();

  return (
    <Layout>
      {cartItems.length === 0 ? (
        <div className="h-full">
          <div className="py-10 px-3 bg-white border-gray-300 rounded flex items-center flex-col justify-center mb-20 mt-8 sm:mt-40 mx-6">
            <img
              src={basket}
              alt="basket"
              className="h-24 w-24 sm:h-32 sm:w-32 opacity-50"
            />
            <h6 className="text-gray-800 text-sm sm:text-lg">
              سبد خرید شما خالی است!
            </h6>
            <p className="mt-6 mb-2 text-xs sm:text-sm text-gray-600">
              می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید
            </p>
            <Link to="/" className="text-blue-500 text-xs sm:text-sm">
              آخرین محصولات
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-auto sm:mt-32  mx-1  border-0 sm:border-t border-gray-300 ">
            <div className="flex flex-col md:flex-row w-full pt-8 pb-24">
              <div className="flex flex-col space-y-6 w-full md:w-4/6">
                {cartItems.map((item) => (
                  <CartItem key={item.product} item={item} />
                ))}
              </div>
              <div
                className={`w-full md:w-2/6 mt-4 md:mt-auto relative left-auto  ${
                  affix ? 'md:fixed md:left-0' : 'relative left-auto'
                }`}
              >
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
                    onClick={checkoutHandler}
                    className="mt-4 hidden md:block bg-red-100 text-sm text-white py-4  rounded-lg focus:outline-none"
                  >
                    ادامه فرآیند خرید
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white px-6 pb-1 flex  fixed bottom-0 items-center justify-between  md:hidden">
            <button
              onClick={checkoutHandler}
              className="my-4 bg-red-100 text-sm text-white p-2 rounded-lg focus:outline-none"
            >
              ادامه فرآیند خرید
            </button>
            <div>
              <p className="text-xs text-gray-500">مبلغ قابل پرداخت</p>
              <p className="text-sm text-gray-800">{totalPrice} تومان</p>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Cart;
