const items = [
  {
    id: 1,
    name: 'Kadın Trench Coat jean',
    description: 'Rüzgar geçirmez ve suya dayanıklı kadın trench coat',
    image: '/images/clothes-3.jpg',
    image2: '/images/3.jpg',
    image3: '/images/2.jpg',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 2,
    name: 'Erkek Slim Fit Gömlek jean',
    description: 'Modern tarzda slim fit erkek gömlek',
    image: '/images/jacket-1.jpg',
    image2: '/images/3.jpg',
    image3: '/images/2.jpg',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 3,
    name: 'Kadın Midi Elbise',
    description: 'Rahat ve şık kadın midi elbise',
    image: '/images/clothes-4.jpg',
    image2: '/images/3.jpg',
    image3: '/images/2.jpg',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 4,
    name: 'Erkek Jean',
    description: 'Konforlu ve rahat kot pantolon',
    image: '/images/jacket-5.jpg',
    image2: '/images/3.jpg',
    image3: '/images/2.jpg',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 5,
    name: 'Kadın Skinny Jean',
    description: 'Modaya uygun ve rahat kadın skinny jean',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 6,
    name: 'Erkek Deri Ceket',
    description: 'Klasik ve şık erkek deri ceket',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 7,
    name: 'Kadın Crop Top t-shirt',
    description: 'Yaz için trendy ve feminen kadın crop top',
    image: '/images/clothes-2.jpg',
    image2: '/images/3.jpg',
    image3: '/images/2.jpg',
    cost: '$25',
    category: 't-shirt',
  },
  {
    id: 8,
    name: 'Erkek Slim Fit Pantolon t-shirt',
    description: 'Modern tarzda slim fit erkek pantolon',
    image: '/images/clothes-1.jpg',
    image2: '/images/3.jpg',
    image3: '/images/2.jpg',
    cost: '$25',
    category: 't-shirt',
  },
  {
    id: 9,
    name: 'Kadın Midi Etek',
    description: 'Çeşitli kombinlerle uyumlu kadın midi etek',
    image: '/images/2.jpg',
    image2: '/images/3.jpg',
    image3: '/images/2.jpg',
    cost: '$25',
    category: 't-shirt',
  },
  {
    id: 10,
    name: 'Erkek Polo Yaka Tişört',
    description: 'Rahat ve spor erkek polo yaka tişört',
    image: '/images/3.jpg',
    image2: '/images/3.jpg',
    image3: '/images/2.jpg',
    cost: '$25',
    category: 't-shirt',
  },
  {
    id: 111,
    name: 'Kadın Pileli Elbise',
    description: 'Şık ve romantik kadın pileli elbise',
    image: '/images/clothes-3.jpg',
    image2: '/images/3.jpg',
    image3: '/images/2.jpg',
    cost: '$25',
    category: 't-shirt',
  },
  {
    id: 12,
    name: 'Erkek Slim Fit Blazer Ceket',
    description: 'Şık ve zarif erkek slim fit blazer ceket',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 't-shirt',
  },
  {
    id: 11,
    name: 'Kadın Trench Coat',
    description: 'Rüzgar geçirmez ve suya dayanıklı kadın trench coat',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 't-shirt',
  },
  {
    id: 122,
    name: 'Erkek Slim Fit Gömlek',
    description: 'Modern tarzda slim fit erkek gömlek',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 't-shirt',
  },
  {
    id: 13,
    name: 'Kadın Midi Elbise',
    description: 'Rahat ve şık kadın midi elbise',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 't-shirt',
  },
  {
    id: 14,
    name: 'Erkek Sneaker Ayakkabı',
    description: 'Konforlu ve spor erkek sneaker ayakkabı',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 't-shirt',
  },
  {
    id: 15,
    name: 'Kadın Skinny Jean',
    description: 'Modaya uygun ve rahat kadın skinny jean',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 't-shirt',
  },
  {
    id: 16,
    name: 'Erkek Deri Ceket',
    description: 'Klasik ve şık erkek deri ceket',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 't-shirt',
  },
  {
    id: 17,
    name: 'Kadın Crop Top jean',
    description: 'Yaz için trendy ve feminen kadın crop top',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 18,
    name: 'Erkek Slim Fit Pantolon',
    description: 'Modern tarzda slim fit erkek pantolon',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 19,
    name: 'Kadın Midi Etek',
    description: 'Çeşitli kombinlerle uyumlu kadın midi etek',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 110,
    name: 'Erkek Polo Yaka Tişört',
    description: 'Rahat ve spor erkek polo yaka tişört',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 1111,
    name: 'Kadın Pileli Elbise',
    description: 'Şık ve romantik kadın pileli elbise',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 1122,
    name: 'Erkek Slim Fit Blazer Ceket',
    description: 'Şık ve zarif erkek slim fit blazer ceket',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 18,
    name: 'Erkek Slim Fit Pantolon',
    description: 'Modern tarzda slim fit erkek pantolon',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 19,
    name: 'Kadın Midi Etek',
    description: 'Çeşitli kombinlerle uyumlu kadın midi etek',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 110,
    name: 'Erkek Polo Yaka Tişört',
    description: 'Rahat ve spor erkek polo yaka tişört',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 1111,
    name: 'Kadın Pileli Elbise',
    description: 'Şık ve romantik kadın pileli elbise',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 1122,
    name: 'Erkek Slim Fit Blazer Ceket',
    description: 'Şık ve zarif erkek slim fit blazer ceket',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 18,
    name: 'Erkek Slim Fit Pantolon',
    description: 'Modern tarzda slim fit erkek pantolon',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 19,
    name: 'Kadın Midi Etek',
    description: 'Çeşitli kombinlerle uyumlu kadın midi etek',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 110,
    name: 'Erkek Polo Yaka Tişört',
    description: 'Rahat ve spor erkek polo yaka tişört',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 1111,
    name: 'Kadın Pileli Elbise',
    description: 'Şık ve romantik kadın pileli elbise',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 1122,
    name: 'Erkek Slim Fit Blazer Ceket',
    description: 'Şık ve zarif erkek slim fit blazer ceket',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 18,
    name: 'Erkek Slim Fit Pantolon',
    description: 'Modern tarzda slim fit erkek pantolon',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 19,
    name: 'Kadın Midi Etek',
    description: 'Çeşitli kombinlerle uyumlu kadın midi etek',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 110,
    name: 'Erkek Polo Yaka Tişört',
    description: 'Rahat ve spor erkek polo yaka tişört',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 1111,
    name: 'Kadın Pileli Elbise',
    description: 'Şık ve romantik kadın pileli elbise',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 1122,
    name: 'Erkek Slim Fit Blazer Ceket',
    description: 'Şık ve zarif erkek slim fit blazer ceket',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 18,
    name: 'Erkek Slim Fit Pantolon',
    description: 'Modern tarzda slim fit erkek pantolon',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 19,
    name: 'Kadın Midi Etek',
    description: 'Çeşitli kombinlerle uyumlu kadın midi etek',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 110,
    name: 'Erkek Polo Yaka Tişört',
    description: 'Rahat ve spor erkek polo yaka tişört',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 1111,
    name: 'Kadın Pileli Elbise',
    description: 'Şık ve romantik kadın pileli elbise',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },
  {
    id: 1122,
    name: 'Erkek Slim Fit Blazer Ceket',
    description: 'Şık ve zarif erkek slim fit blazer ceket',
    image: 'https://picsum.photos/seed/picsum/200/300',
    cost: '$25',
    category: 'jean',
  },

  {
    id: 11223,
    name: 'Pembe Bebek Ayakkabısı',
    description: 'Şık ve zarif erkek slim fit blazer ceket',
    image: '/images/1.jpg',
    cost: '$25',
    category: 'shoe',
  },
  {
    id: 183,
    name: 'Erkek Slim Fit Pantolon',
    description: 'Modern tarzda slim fit erkek pantolon',
    image: '/images/shoe-1_1.jpg',
    cost: '$25',
    category: 'shoe',
  },
  {
    id: 193,
    name: 'Kadın Midi Etek',
    description: 'Çeşitli kombinlerle uyumlu kadın midi etek',
    image: '/images/shoe-2_1.jpg',
    cost: '$25',
    category: 'shoe',
  },
  {
    id: 1103,
    name: 'Erkek Polo Yaka Tişört',
    description: 'Rahat ve spor erkek polo yaka tişört',
    image: '/images/shoe-3.jpg',
    cost: '$25',
    category: 'shoe',
  },
  {
    id: 11113,
    name: 'Kadın Pileli Elbise',
    description: 'Şık ve romantik kadın pileli elbise',
    image: '/images/shoe-4.jpg',
    image2: '/images/shoe-5.jpg',
    cost: '$25',
    category: 'shoe',
  },
  {
    id: 11232,
    name: 'Erkek Blazer Ceket',
    description: 'Şık ve zarif erkek slim fit blazer ceket',
    image: '/images/jacket-1.jpg',
    image2: '/images/jacket-2.jpg',
    image3: '/images/jacket-3.jpg',
    cost: '$25',
    category: 'jacket',
  },
  {
    id: 1833,
    name: 'Erkek Slim Fit Pantolon',
    description: 'Modern tarzda slim fit erkek pantolon',
    image: '/images/jacket-2.jpg',
    image2: '/images/jacket-1.jpg',
    image3: '/images/jacket-3.jpg',
    cost: '$25',
    category: 'jacket',
  },
  {
    id: 19123,
    name: 'Kadın Midi Etek',
    description: 'Çeşitli kombinlerle uyumlu kadın midi etek',
    image: '/images/jacket-3.jpg',
    image2: '/images/jacket-4.jpg',
    image3: '/images/jacket-1.jpg',
    cost: '$25',
    category: 'jacket',
  },
  {
    id: 110,
    name: 'Erkek Polo Yaka Tişört',
    image: '/images/jacket-4.jpg',
    image2: '/images/jacket-2.jpg',
    image3: '/images/jacket-1.jpg',
    cost: '$25',
    category: 'jacket',
  },
  {
    id: 865,
    name: 'Erkek Fötr Şapka',
    description: 'Şık ve romantik erkekler için.',
    image: '/images/4.jpg',
    cost: '$25',
    category: 'hat',
  },
];

export default items;
