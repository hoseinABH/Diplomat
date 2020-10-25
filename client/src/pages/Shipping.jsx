import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import InputLabel from '../components/InputLabel';
import { useSelector, useDispatch } from 'react-redux';
import { saveShippingAddress } from '../redux/actions/cartActions';
import { useHistory } from 'react-router-dom';
const Shipping = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = React.useState(shippingAddress.address);
  const [city, setCity] = React.useState(shippingAddress.city);
  const [postalCode, setPostalCode] = React.useState(
    shippingAddress.postalCode
  );
  const [country, setCountry] = React.useState(shippingAddress.country);

  const dispatch = useDispatch();
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push('/payment');
  };

  return (
    <form autoComplete="off" className="mt-4" onSubmit={submitHandler}>
      <InputLabel>آدرس</InputLabel>
      <Input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        type="text"
        name="address"
      />
      <InputLabel>شهر</InputLabel>
      <Input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
        type="text"
        name="city"
      />
      <InputLabel>کدپستی</InputLabel>
      <Input
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        required
        type="text"
        name="postalCode"
      />
      <InputLabel>کشور</InputLabel>
      <Input
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
        type="text"
        name="country"
      />
      <Button type="submit">ادامه فرآیند خرید</Button>
    </form>
  );
};

export default Shipping;
