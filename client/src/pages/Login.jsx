import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Button from '../components/Button';
import Input from '../components/Input';
import InputLabel from '../components/InputLabel';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userActions';
import Message from '../components/Message';
const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, errors, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  React.useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="flex w-full h-screen justify-center items-center  bg-white">
      <div className="sm:border sm:border-gray-300 2xl:border-none  rounded-lg max-w-sm w-full ">
        <div className="flex flex-col items-center py-12 px-6 ">
          <Link to="/">
            <img src={logo} alt="diplomat" />
          </Link>
          <h1 className="text-xl font-bold  flex-grow mt-6 mb-4  flex flex-col self-start">
            ورود
          </h1>
          {errors && (
            <Message variant="Error" timer={3000}>
              {errors}
            </Message>
          )}

          <form onSubmit={handleSubmit} autoComplete="off">
            <InputLabel>پست الکترونیک</InputLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
            />
            <InputLabel>کلمه عبور</InputLabel>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
            />
            <Button disabled={loading} type="submit">
              {loading ? 'در حال پردازش...' : 'ورود به دیپلمات'}
            </Button>
          </form>

          <p className="text-xs font-hairline text-center leading-5">
            با ورود و یا{' '}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : '/register'}
              className="text-red-100 font-extrabold"
            >
              ثبت نام
            </Link>{' '}
            در دیپلمات شما شرایط و قوانین استفاده از سرویس های سایت دیپلمات و
            قوانین حریم خصوصی آن را می‌پذیرید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
