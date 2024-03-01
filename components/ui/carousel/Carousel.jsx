import Link from 'next/link';
import './carousel.scss';
import items from '@/app/data';
import { getCategoryItems } from '@/app/action';
import Controls from './Controls';

const Carousel = ({ category }) => {
  const data = getCategoryItems(category);

  return (
    <div className='carousel'>
      <Link href={`/category/${category}`} className='carousel__link'>
        <h2>{category.toUpperCase()}</h2>
      </Link>
      <Controls data={data} />
    </div>
  );
};

export default Carousel;
