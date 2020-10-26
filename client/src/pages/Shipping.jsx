import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import InputLabel from '../components/InputLabel';
import { useSelector, useDispatch } from 'react-redux';
import { saveShippingAddress } from '../redux/actions/cartActions';
import { useHistory } from 'react-router-dom';
import Steps from '../components/Steps';

const Shipping = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = React.useState(shippingAddress.address);
  const [city, setCity] = React.useState(shippingAddress.city);
  const [postalCode, setPostalCode] = React.useState(
    shippingAddress.postalCode
  );
  const [state, setState] = React.useState(shippingAddress.state);

  const dispatch = useDispatch();
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, state }));
    history.push('/payment');
  };

  return (
    <div className="h-screen bg-white">
      <div className="flex w-full flex-col items-center py-5 px-6">
        <Steps step3 step4 />

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
          <InputLabel>استان</InputLabel>
          <Input
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            type="text"
            name="state"
          />
          <Button type="submit">ادامه فرآیند خرید</Button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
