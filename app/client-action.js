'use client';

import items from './data';

export const getCategoryItems = (category) => {
  const newArray = items.filter((item) => item.category === category);
  return newArray.slice(0, 12);
};
