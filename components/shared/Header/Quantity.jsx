'use client';
import { CartContext } from '@/providers/CartContext';
import { useContext } from 'react';
import './header.scss';
const Quantity = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) return <span></span>;

  return <span className='nav__cart__link__quantity'>{cart.length}</span>;
};

export default Quantity;
