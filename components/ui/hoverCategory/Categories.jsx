import HoverCard from './HoverCard';
import Link from 'next/link';
import './categories.scss';

const Categories = () => {
  return (
    <div className='nav_categories_links'>
      <ul>
        <li>
          <Link href='/category/t-shirt'>
            <HoverCard>T-shirt</HoverCard>
          </Link>
        </li>
        <li>
          <Link href='/category/2'>
            <HoverCard>Jackets</HoverCard>
          </Link>
        </li>
        <li>
          <Link href='/category/jean'>
            <HoverCard>Jeans</HoverCard>
          </Link>
        </li>
        <li>
          <Link href='/category/4'>
            <HoverCard>Shoes</HoverCard>
          </Link>
        </li>
        <li>
          <Link href='/category/5'>
            <HoverCard>Hats</HoverCard>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
