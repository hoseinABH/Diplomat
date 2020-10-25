import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import InputLabel from '../components/InputLabel';

const Shipping = () => {
  return (
    <form autoComplete="off" className="mt-4">
      <InputLabel>آدرس</InputLabel>
      <Input type="email" name="email" />
      <InputLabel>شهر</InputLabel>
      <Input type="password" name="password" />
      <InputLabel>کدپستی</InputLabel>
      <Input type="password" name="password" />
      <InputLabel>کشور</InputLabel>
      <Input type="password" name="password" />
      <Button type="submit">ادامه فرآیند خرید</Button>
    </form>
  );
};

export default Shipping;
