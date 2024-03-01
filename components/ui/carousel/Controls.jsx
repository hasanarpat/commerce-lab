'use client';
import './carousel.scss';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card from '../card/Card';
import { useState, useRef, useEffect } from 'react';
const Controls = ({ data }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const sliderRef = useRef(null);
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
      {slideNumber < 7 && (
        <div className='carousel__items__arrow-right carousel__items__arrow'>
          <FaArrowRight onClick={() => handleSlideNumber('right')} />
        </div>
      )}
    </div>
  );
};

export default Controls;
