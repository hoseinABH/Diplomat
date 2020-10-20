import React from 'react';
import Layout from '../components/Layout';
import edit from '../assets/images/edit.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserDetails,
  updateUserProfile,
} from '../redux/actions/userActions';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Message from '../components/Message';
import ProfileSkeleton from '../components/ProfileSkeleton';
const Profile = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [message, setMessage] = React.useState(null);
  const [inputs, showInputs] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, errors, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  React.useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user || !user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, setName]);

  const submitHandler = () => {
    if (password !== confirmPassword) {
      setMessage('کلمه عبور یکسان نیست');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
      showInputs(false);
      setSuccess(true);
    }
  };
  return (
    <Layout>
      <div className="flex items-center justify-center h-full">
        <div className="py-2 px-6 mx-4 sm:px-3 text-sm bg-white border-gray-300 rounded flex w-full flex-col mb-12 mt-8 sm:mt-32 sm:mx-6">
          {message && (
            <Message variant="Error" timer={3000}>
              {message}
            </Message>
          )}
          {success && (
            <Message variant="Success" timer={3000}>
              حساب کاربری بروزرسانی شد.
            </Message>
          )}
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
            <ProfileSkeleton />
          ) : (
            <>
              <div className="w-full flex flex-col sm:flex-row mt-6">
                <div className="w-full sm:w-1/2  flex flex-col  border-0   sm:border-l border-gray-400 p-2">
                  <div className="w-full border-0 border-b  pb-4 border-gray-400 flex justify-between items-start">
                    <div className="flex w-full flex-col space-y-1">
                      <h1 className="text-gray-800  font-semibold">
                        نام و نام خانوادگی:
                      </h1>
                      {inputs ? (
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          name="name"
                        />
                      ) : (
                        <p className="text-gray-600">{name}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-start pt-4 border-0 sm:border-b-0 border-b border-gray-400 pb-4 sm:pb-0 ">
                    <div className="flex w-full flex-col space-y-1">
                      <h1 className="text-gray-800  font-semibold">
                        رمز عبور:
                      </h1>
                      {inputs ? (
                        <>
                          <Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            placeHolder="کلمه عبور جدید"
                          />
                          <Input
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            name="confpass"
                            placeHolder="تکرار کلمه عبور"
                          />
                        </>
                      ) : (
                        <p className="text-gray-600">************</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 flex justify-between items-start p-2">
                  <div className="flex w-full flex-col space-y-1  sm:border-b border-b-0 pb-4 border-gray-400">
                    <h1 className="text-gray-800  font-semibold">
                      پست الکترونیک:
                    </h1>
                    {inputs ? (
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                      />
                    ) : (
                      <p className="text-gray-600"> {email}</p>
                    )}
                  </div>
                </div>
              </div>
              {inputs ? (
                <Button onClick={submitHandler} type="button">
                  ثبت تغییرات
                </Button>
              ) : (
                <div
                  onClick={() => showInputs(true)}
                  className="flex space-x-2 items-center w-full sm:justify-start justify-center sm:w-1/6   my-4 text-blue-600 cursor-pointer"
                >
                  <span>ویرایش اطلاعات </span>
                  <img className="w-3 h-3" src={edit} alt="edit" />
                </div>
              )}
            </>
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
