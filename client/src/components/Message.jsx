import React from 'react';

const Message = ({ variant, children, timer }) => {
  const [alertState, setAlertState] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (alertState) {
        setAlertState(!alertState);
      }
    }, timer);
    return () => {
      clearInterval(interval);
    };
  }, [alertState, setAlertState, timer]);
  return (
    <div
      className={`flex fixed bottom-0 mb-6 w-auto  z-50 transition-opacity duration-500  items-center rounded-md ${
        variant === 'Error'
          ? 'bg-yellow-200 border-yellow-300'
          : 'bg-green-200 border-green-300'
      } p-5 rounded border-b-2  ${
        alertState === false ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className={`alert-icon flex items-center ${
          variant === 'Error'
            ? 'bg-yellow-200  border-yellow-500'
            : 'bg-green-200  border-green-500'
        } border-2 justify-center h-10 w-10 flex-shrink-0 rounded-full`}
      >
        <span
          className={` animate-pulse${
            variant === 'Error' ? 'text-yellow-500' : 'text-green-500'
          }`}
        >
          {variant === 'Error' ? (
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="h-6 w-6 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="h-6 w-6 text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </span>
      </div>
      <div className="alert-content mr-4 text-md">
        <div
          className={`alert-title font-semibold text-lg ${
            variant === 'Error' ? 'text-yellow-800' : 'text-green-800'
          } `}
        >
          {variant === 'Success' ? 'عملیات انجام شد' : 'خطای عملیات'}
        </div>
        <div
          className={`alert-description mt- text-sm ${
            variant === 'Error' ? 'text-yellow-600' : 'text-green-600'
          } `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Message;
