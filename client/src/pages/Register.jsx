import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Button from '../components/Button';
import Input from '../components/Input';
import InputLabel from '../components/InputLabel';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/userActions';
import Message from '../components/Message';
const Register = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confpass, setConfpass] = React.useState('');
  const [message, setMessage] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, errors, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  React.useEffect(() => {
    if (localStorage.getItem('userInfo') !== null) {
      setSuccess('ثبت نام با موفقیت انجام شد.');
      setTimeout(() => {
        setSuccess(null);
        history.push(redirect);
      }, 3000);
    }
  }, [redirect, history, userInfo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confpass) {
      setMessage('کلمه عبور یکسان نیست.');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } else if (name === '' || email === '') {
      setMessage('لطفا ایمیل یا پسورد را پر کنید.');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <div className="flex w-full h-screen justify-center items-center bg-white">
      <div className="sm:border sm:border-gray-300 2xl:border-none  rounded-lg max-w-sm w-full ">
        <div className="flex flex-col items-center py-2 px-6 ">
          <Link to="/">
            <img src={logo} alt="diplomat" />
          </Link>
          <h1 className="text-xl font-bold  flex-grow mt-6 flex flex-col self-start">
            ثبت نام
          </h1>
          {success && (
            <Message variant="Success" timer={3000}>
              {success}
            </Message>
          )}
          {message && (
            <Message variant="Error" timer={3000}>
              {message}
            </Message>
          )}
          {errors && (
            <Message variant="Error" timer={3000}>
              {errors}
            </Message>
          )}
          <form autoComplete="off" onSubmit={handleSubmit}>
            <InputLabel> نام(نام خانوادگی) </InputLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
            />
            <InputLabel>پست الکترونیک </InputLabel>
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
              name="email"
            />
            <InputLabel>تکرار کلمه عبور</InputLabel>
            <Input
              value={confpass}
              onChange={(e) => setConfpass(e.target.value)}
              type="password"
              name="email"
            />
            <Button type="submit">
              {loading ? 'درحال پردازش...' : 'ثبت نام در دیپلمات'}
            </Button>
          </form>

          <p className="text-xs font-hairline text-center leading-5">
            با{' '}
            <Link
              to={redirect ? `/login?redirect=${redirect}` : '/login'}
              className="text-red-100 font-extrabold"
            >
              ورود
            </Link>{' '}
            و یا ثبت نام در دیپلمات شما شرایط و قوانین استفاده از سرویس های سایت
            دیپلمات و قوانین حریم خصوصی آن را می‌پذیرید.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
