import React from 'react';
import stock from '../assets/images/stock.png';
import deleteIcon from '../assets/images/delete.png';
import quality from '../assets/images/quality.png';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import Modal from './Modal';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, toggleModal] = React.useState(false);

  return (
    <div className="flex  items-start rounded-lg border py-10 px-3 bg-white border-gray-300">
      <img
        className="w-24 h-24 md:w-32 md:h-32"
        src={item.image}
        alt={item.name}
      />

      <div className="flex flex-col mr-3">
        <Link
          to={`/product/${item.product}`}
          className="text-sm lg:text-lg text-justify"
        >
          {item.name}
        </Link>
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
          <div className="text-xl flex items-center ">
            <select
              autoFocus={true}
              className="border cursor-pointer overflow-scroll border-gray-400 hover:border-gray-500 px-2  rounded shadow  leading-tight focus:outline-none "
              value={item.qty}
              onChange={(e) => {
                dispatch(addToCart(item.product, Number(e.target.value)));
              }}
            >
              {[...Array(item.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
            <div
              onClick={() => toggleModal(true)}
              className="flex mr-4 cursor-pointer"
            >
              <img src={deleteIcon} alt="delete" className="h-4 w-4" />
              <p className="text-sm mr-px text-gray-500">حذف</p>
            </div>
          </div>
          <div className="items-center hidden sm:flex">
            <span className="text-gray-800">{item.price} </span>
            <p className="text-xs">تومان</p>
          </div>
        </div>
      </div>
      <Modal
        onConfirm={() => {
          dispatch(removeFromCart(item.product));
          history.push('/cart');
        }}
        isOpen={isOpen}
        toggleModal={toggleModal}
      >
        آیا مایل به حذف این کالا هستید ؟
      </Modal>
    </div>
  );
};

export default CartItem;
