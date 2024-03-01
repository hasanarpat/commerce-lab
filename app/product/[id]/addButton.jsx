'use client';
import { CartContext } from '@/providers/CartContext';
import { useContext } from 'react';

const AddButton = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <button className='add-cart' onClick={() => addToCart(product, '1')}>
      Add to Cart
    </button>
  );
};

export default AddButton;
