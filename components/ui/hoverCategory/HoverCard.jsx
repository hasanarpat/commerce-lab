'use client';
import './hoverCard.scss';
import { useState } from 'react';

const HoverCard = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div
      className='hover-card'
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      {children}
      {showPopup && (
        <div className='hover-card__category'>
          <ul>
            <li>Popular in {children}</li>
            <li>Best Sellers in {children}</li>
            <li>New in {children}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HoverCard;
