import React from 'react';
import {
  IconHome,
  IconHomeActive,
  IconOrder,
  IconOrderActive,
  IconAkunt,
  IconAkuntActive,
  AddCoin,
  AddMoney,
  Carpet,
  Ironing,
  Kilo,
  Shirt,
  Truck,
} from '../../assets';
const Icon = ({label, isFocused}) => {
    switch (label) {
      case 'Home':
       return isFocused ? <IconHomeActive /> : <IconHome />;
      case 'Order':
        return isFocused ? <IconOrderActive /> : <IconOrder />;
      case 'Akunt':
        return isFocused ? <IconAkuntActive /> : <IconAkunt />;
      case 'Add Balance':
        return <AddMoney />;
      case 'Add Coin':
        return <AddCoin/>;
      default:
        return <IconHome />;
    }
};
export default Icon
