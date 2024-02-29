'use server';

import items from './data';

export const getAllItems = () => {
  return items;
};

export const getLimitedItems = (limit, index, id) => {
  const categoryItems = getCategoryItems(id.toLowerCase());
  const newArray = categoryItems.slice(limit, index);
  return newArray;
};

export const getCategoryItems = (category) => {
  const newArray = items.filter((item) => item.category === category);
  return newArray;
};
export const getCategoryItemsLength = (category) => {
  return getCategoryItems(category).length;
};
