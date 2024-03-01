import { getSingleItem } from '@/app/action';
import Image from 'next/image';
import './page.scss';

const Product = ({ params, searchParams }) => {
  const { id } = params;
  // console.log(searchParams, 'searchParams', id, 'id');
  const product = getSingleItem(id);

  const handleAddCart = async () => {
    'use server';
    console.log('Add to Cart');
  };

  return (
    <div className='product-page'>
      <div className='product-page__wrapper'>
        <div className='product-page__wrapper__left'>
          <div className='product-page__wrapper__left__image-container'>
            <div className='product-page__wrapper__left__image-container__top'>
              <div className='product-page__img'>
                <Image
                  alt='product image'
                  src={product.image}
                  className='product__img'
                  fill
                />
              </div>
              <div className='product-page__img'>
                <Image
                  alt='product image'
                  src={product.image}
                  className='product__img'
                  fill
                />
              </div>
            </div>
            <div className='product-page__wrapper__left__image-container__bottom'>
              <div className='product-page__img'>
                <Image
                  alt='product image'
                  src={product.image}
                  className='product__img'
                  fill
                />
              </div>
            </div>
          </div>
        </div>
        <div className='product-page__wrapper__right'>
          <h1 className='product-page__wrapper__right__title'>
            {product.name}
          </h1>
          <p className='product-page__wrapper__right__desc'>
            {product.description}
          </p>
          <div className='product-page__wrapper__right__price__group'>
            <span className='product-page__wrapper__right__price__group__price'>
              {product.cost}
            </span>
            <div className='product-page__wrapper__right__price__group__actions'>
              <form
                action={handleAddCart}
                className='product-page__cart-actions-form'
              >
                <button className='add-cart'>Add to Cart</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
