'use client';
import Card from '@/components/ui/card/Card';
import { CartContext } from '@/providers/CartContext';
import { useContext } from 'react';
import { IoIosRemoveCircle, IoIosAddCircle } from 'react-icons/io';
import './page.scss';
const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className='cart-page'>
      <div className='cart-page__wrapper'>
        <div className='cart-page__wrapper__products'>
          {cart.map((product, _index) => (
            <div
              key={product.id}
              className='cart-page__wrapper__products__item'
            >
              <Card product={product} />
              <div className='cart-page__wrapper__products__item__buttons'>
                <IoIosAddCircle
                  className='product-quantity-icon'
                  onClick={() =>
                    addToCart(product, String(parseInt(product.quantity) + 1))
                  }
                />{' '}
                <b>|</b>
                <span>{product.quantity}</span> <b>|</b>
                <IoIosRemoveCircle
                  className='product-quantity-icon'
                  onClick={() =>
                    addToCart(product, String(parseInt(product.quantity) - 1))
                  }
                />
              </div>
              <button
                className='removeFromCartButton'
                onClick={() => removeFromCart(product.id)}
              >
                Remove From Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
