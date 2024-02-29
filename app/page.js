import Slider from '@/components/ui/slider/Slider';
import './homepage.scss';
import Carousel from '@/components/ui/carousel/Carousel';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className='homepage'>
      <div className='homepage__slider'>
        <Slider />
      </div>
      {/* CAROUSEL KOMPONENTINI SERVER SIDE YAPTIKTAN SONRA SUSPENSE İLE 3 SN TIMEOUT OLACAK -  SUSPENSE'E DÜŞSÜN // ACTION.JS'DEKİ SERVER SIDE FONKSIYONU KULLANACAKSIN UNUTMA */}
      <Suspense fallback={<p>Loading products...</p>}>
        <Carousel category='jean' />
      </Suspense>
      <Suspense fallback={<p>Loading products...</p>}>
        <Carousel category='t-shirt' />
      </Suspense>
    </main>
  );
}
