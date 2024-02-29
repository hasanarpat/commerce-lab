'use client';

import items from './data';

export const getCategoryItems = (category) => {
  // CAROUSEL KOMPONENTINI SERVER SIDE YAPTIKTAN SONRA BUNU KULLAN 3 SN OLSUN SUSPENSE'E DÜŞSÜN
  // FONKYIONU ACTION.JS'E TASIYACAKSIN UNUTMA
  // setTimeout(function () {
  //   const newArray = items.filter((item) => item.category === category);
  //   return newArray.slice(0, 12);
  //   console.log('5 saniye bekledikten sonra işlemler tamamlandı.');
  // }, 5000);

  const newArray = items.filter((item) => item.category === category);
  return newArray.slice(0, 12);
};
