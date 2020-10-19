import React from 'react';

const Input = ({ name, type, value, onChange, placeHolder }) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeHolder}
      className="border my-1 border-gray-300 rounded-lg  w-full focus:outline-none h-10 p-2 focus:border-red-100"
    />
  );
};

export default Input;
