import { getSingleItem } from '@/app/action';
import Image from 'next/image';
import './page.scss';
import AddButton from './addButton';

const Product = ({ params, searchParams }) => {
  const { id } = params;

  const product = getSingleItem(id);

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
                {product.image2 ? (
                  <Image
                    alt='product image'
                    src={product.image2}
                    className='product__img'
                    fill
                  />
                ) : (
                  <Image
                    alt='product image'
                    src={product.image}
                    className='product__img'
                    fill
                  />
                )}
              </div>
            </div>
            <div className='product-page__wrapper__left__image-container__bottom'>
              <div className='product-page__img'>
                {product.image3 ? (
                  <Image
                    alt='product image'
                    src={product.image3}
                    className='product__img'
                    fill
                  />
                ) : (
                  <Image
                    alt='product image'
                    src={product.image}
                    className='product__img'
                    fill
                  />
                )}
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
              <AddButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
