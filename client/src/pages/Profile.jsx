import React from 'react';
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../redux/actions/userActions';
import { useHistory } from 'react-router-dom';
import edit from '../assets/images/edit.png';
import Input from '../components/Input';
import Message from '../components/Message';
import Spinner from '../components/Spinner';
const Profile = () => {
  const [loggedinUser, setLoggedinUser] = React.useState(
    JSON.parse(localStorage.getItem('userInfo'))
  );

  const [name, setName] = React.useState(loggedinUser.name);
  const [email, setEmail] = React.useState(loggedinUser.email);
  const [password, setPassword] = React.useState('');
  const [confpass, setConfpass] = React.useState('');
  const [message, setMessage] = React.useState(null);
  const [nameField, togglenameField] = React.useState(false);
  const [emailField, toggleemailField] = React.useState(false);
  const [passField, togglepassField] = React.useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, errors, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  React.useEffect(() => {
    if (localStorage.getItem('userInfo') === null) {
      history.push('/login');
    } else {
      if (!user || !user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);
  React.useEffect(() => {
    if (userInfo) {
      setLoggedinUser(userInfo);
    }
  }, [userInfo]);

  return (
    <Layout>
      <div className="flex items-center justify-center h-full">
        <div className="py-2 px-3 text-sm bg-white border-gray-300 rounded flex w-full flex-col mb-12 mt-8 sm:mt-32 mx-4 sm:mx-6">
          {message && (
            <Message variant="Error" timer={3000}>
              {message}
            </Message>
          )}
          {/* {success && (
            <Message variant="Success" timer={3000}>
              حساب کاربری بروزرسانی شد.
            </Message>
          )} */}
          {errors && (
            <Message variant="Error" timer={3000}>
              {errors}
            </Message>
          )}

          <div className="flex flex-col space-y-2">
            <h1 className="text-lg">اطلاعات شخصی</h1>
            <span className="w-20 h-little rounded opacity-75 bg-red-100"></span>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <div className="w-full flex flex-col sm:flex-row mt-6">
              <div className="w-full sm:w-1/2  flex flex-col  border-0   sm:border-l border-gray-400 p-2">
                <div className="w-full border-0 border-b  pb-4 border-gray-400 flex justify-between items-start">
                  <div className="flex w-full flex-col space-y-1">
                    <h1 className="text-gray-800  font-semibold">
                      نام و نام خانوادگی:
                    </h1>
                    {nameField ? (
                      <form autoComplete="off">
                        <Input
                          value={loggedinUser.name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          name="name"
                        />
                      </form>
                    ) : (
                      <p className="text-gray-600">{name && name}</p>
                    )}
                  </div>
                  <img
                    className="w-4 h-4 cursor-pointer"
                    src={edit}
                    alt="edit"
                    onClick={() => togglenameField(!nameField)}
                  />
                </div>
                <div className="w-full flex justify-between items-start pt-4 border-0 sm:border-b-0 border-b border-gray-400 pb-4 sm:pb-0 ">
                  <div className="flex w-full flex-col space-y-1">
                    <h1 className="text-gray-800  font-semibold">رمز عبور:</h1>
                    {passField ? (
                      <form autoComplete="off">
                        <Input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          name="password"
                          placeHolder="کلمه عبور جدید"
                        />
                        <Input
                          value={confpass}
                          onChange={(e) => setConfpass(e.target.value)}
                          type="password"
                          name="confpass"
                          placeHolder="تکرار کلمه عبور"
                        />
                      </form>
                    ) : (
                      <p className="text-gray-600">************</p>
                    )}
                  </div>

                  <img
                    className="w-4 h-4 cursor-pointer"
                    src={edit}
                    alt="edit"
                    onClick={() => togglepassField(!passField)}
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/2 flex justify-between items-start p-2">
                <div className="flex w-full flex-col space-y-1  sm:border-b border-b-0 pb-4 border-gray-400">
                  <h1 className="text-gray-800  font-semibold">
                    پست الکترونیک:
                  </h1>
                  {emailField ? (
                    <form autoComplete="off">
                      <Input
                        value={email && email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                      />
                    </form>
                  ) : (
                    <p className="text-gray-600"> {email && email}</p>
                  )}
                </div>
                <img
                  className="w-4 h-4 cursor-pointer"
                  src={edit}
                  alt="edit"
                  onClick={() => toggleemailField(!emailField)}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center h-full ">
        <div className="py-2 px-3 text-sm bg-white border-gray-300 rounded flex w-full flex-col  mb-20 mt-8 mx-4 ">
          <div className="flex flex-col space-y-2">
            <h1 className="text-lg">آخرین سفارش ها</h1>
            <span className="w-20 h-little rounded opacity-75 bg-red-100"></span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
