import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import cart from '../assets/images/cart.svg';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const [term, setTerm] = React.useState('');
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [dropDown, toggleDropDown] = React.useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  React.useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      prevScrollpos = currentScrollPos;
    });
  }, [setShowNavbar]);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(term + 'Submited');
  };
  return (
    <header
      onClick={() => toggleDropDown(false)}
      className={`flex z-40 sm:fixed top-0  transition-all ease-in-out shadow-lg duration-700 overflow-hidden bg-white w-full  sm:px-4 sm:py-3 flex-col items-center  sm:flex-row justify-center sm:flex  sm:justify-between ${
        showNavbar ? 'opacity-100' : 'opacity-100 sm:opacity-0'
      }`}
    >
      <div className="flex items-center flex-col sm:flex-row   w-full  px-4 py-3 sm:p-0  sm:w-2/4">
        <Link to="/" className="align-center sm:text-center">
          <img src={logo} alt="diplomat" />
        </Link>
        <form onSubmit={handleSearch} className="w-full p-2 flex items-center">
          <input
            type="search"
            name="serch"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="جستجو در دیپلمات..."
            className="px-4 bg-gray-100 transition-all  duration-300 border border-transparent mr-0 sm:mr-3  rounded-lg h-10 w-full  text-sm focus:outline-none focus:border focus:bg-transparent focus:border-gray-300 focus:shadow-sm "
          />
          <nav className="flex items-center  sm:hidden mr-6">
            {userInfo ? (
              <div className="flex flex-col space-y-10">
                <span className="rounded-md shadow-sm ">
                  <button
                    type="button"
                    className="inline-flex  w-full rounded-md  px-1 py-2   transition ease-in-out duration-150 focus:outline-none focus:bg-red-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropDown(!dropDown);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
                    </svg>
                    <svg
                      className=" mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 22 22"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
                <div
                  className={`fixed ml-10  left-0 w-40 rounded-md ${
                    dropDown ? 'absolute z-50' : 'hidden'
                  } `}
                >
                  <div className="rounded-md bg-white shadow">
                    <div className="py-1" role="menu">
                      <Link
                        to="/profile"
                        className="flex flex-col px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                      >
                        <p className="py-1 text-blue-600">
                          {' '}
                          {userInfo.name && userInfo.name}
                        </p>
                        مشاهده حساب کاربری
                      </Link>

                      <button
                        className="block w-full text-right px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                      >
                        خروج
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
                </svg>
              </Link>
            )}
            <Link to="/cart" className="mx-4 p-2 focus:bg-red-200 rounded">
              <img className="w-6  max-w-screen-sm" src={cart} alt="cart" />
            </Link>
          </nav>
        </form>
      </div>
      <nav className="hidden items-center  sm:flex">
        {userInfo ? (
          <div className="flex flex-col space-y-10">
            <span className="rounded-md shadow-sm ">
              <button
                type="button"
                className="inline-flex  w-full rounded-md  px-1 py-2   transition ease-in-out duration-150 focus:outline-none focus:bg-red-200"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropDown(!dropDown);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
                </svg>
                <svg
                  className=" mr-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </span>
            <div
              className={`fixed ml-10  left-0 w-40 rounded-md ${
                dropDown ? 'flex' : 'hidden'
              } `}
            >
              <div className="rounded-md bg-white shadow">
                <div className="py-1" role="menu">
                  <Link
                    to="/profile"
                    className="block  px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                  >
                    <p className="py-1 text-blue-600">
                      {' '}
                      {userInfo.name && userInfo.name}
                    </p>
                    مشاهده حساب کاربری
                  </Link>

                  <button
                    className="block w-full text-right px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                  >
                    خروج
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="flex items-center border border-gray-300 px-2 py-3 rounded-lg  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
            </svg>
            <span className="text-sm mr-2">ورود به حساب کاربری</span>
          </Link>
        )}
        <Link to="/cart" className="p-2 focus:bg-red-200 rounded">
          <img className="w-6" src={cart} alt="cart" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
