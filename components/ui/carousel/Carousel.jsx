'use client';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card from '../card/Card';
import Link from 'next/link';
import './carousel.scss';
import { useState, useRef, useEffect } from 'react';
import items from '@/app/data';
import { getCategoryItems } from '@/app/client-action';

const Carousel = ({ category }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const sliderRef = useRef(null);

  const data = getCategoryItems(category);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${slideNumber * 336}px)`;
    }
  }, [slideNumber]);

  const handleSlideNumber = (direction) => {
    console.log(slideNumber);
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber((prev) => prev - 1);
    } else if (direction === 'right' && slideNumber < 7) {
      setSlideNumber((prev) => prev + 1);
    }
  };
  return (
    <div className='carousel'>
      <Link href={`/category/${category}`} className='carousel__link'>
        <h2>{category.toUpperCase()}</h2>
      </Link>
      <div className='carousel__items'>
        {slideNumber !== 0 && (
          <div className='carousel__items__arrow-left carousel__items__arrow'>
            <FaArrowLeft onClick={() => handleSlideNumber('left')} />
          </div>
        )}
        <div className='carousel__items__cards__wrapper'>
          <div className='carousel-wrapper-slide' ref={sliderRef}>
            {data.map((item, _index) => (
              <Card key={_index} product={item} />
            ))}
          </div>
        </div>
        <div className='carousel__items__arrow-right carousel__items__arrow'>
          <FaArrowRight onClick={() => handleSlideNumber('right')} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
