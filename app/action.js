'use server';

import items from './data';

export const getAllItems = () => {
  return items;
};

export const getSingleItem = (wantedId) => {
  return items.find((item) => item.id === parseInt(wantedId));
};

export const getLimitedItems = (limit, index, id) => {
  const categoryItems = getCategoryItems(id.toLowerCase());
  const newArray = categoryItems.slice(limit, index);
  return newArray;
};

export const getCategoryItems = (category) => {
  const newArray = items.filter((item) => item.category === category);
  return newArray;
  // setTimeout(function () {
  //   const newArray = items.filter((item) => item.category === category);
  //   return newArray.slice(0, 12);
  //   console.log('5 saniye bekledikten sonra işlemler tamamlandı.');
  // }, 5000);
};
export const getCategoryItemsLength = (category) => {
  return getCategoryItems(category).length;
};
