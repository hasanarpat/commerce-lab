'use client';
import Image from 'next/image';
import './slider.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        slideNumber * 1230
      }px)`;
    }
  }, [slideNumber]);

  const handleSlideNumber = (direction) => {
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber((prev) => prev - 1);
    } else if (direction === 'right' && slideNumber < 2) {
      setSlideNumber((prev) => prev + 1);
    }
  };
  return (
    <div className='homepage__slider__container'>
      <div className='arrow arrow__left'>
        <FaArrowLeft onClick={() => handleSlideNumber('left')} />
      </div>
      <div className='homepage__slider__container__wrapper' ref={sliderRef}>
        <div className='homepage__slider__container__wrapper__image__container'>
          <Image
            alt='slider image'
            src='https://images.pexels.com/photos/8454950/pexels-photo-8454950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill
            className='homepage__slider__container__wrapper__image__container__img'
          />
        </div>
        <div className='homepage__slider__container__wrapper__image__container'>
          <Image
            alt='slider image'
            src='https://images.pexels.com/photos/9850830/pexels-photo-9850830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill
            className='homepage__slider__container__wrapper__image__container__img'
          />
        </div>
        <div className='homepage__slider__container__wrapper__image__container'>
          <Image
            alt='slider image'
            src='https://images.pexels.com/photos/7020600/pexels-photo-7020600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill
            className='homepage__slider__container__wrapper__image__container__img'
          />
        </div>
      </div>
      <div className='arrow arrow__right'>
        <FaArrowRight onClick={() => handleSlideNumber('right')} />
      </div>
    </div>
  );
};

export default Slider;
