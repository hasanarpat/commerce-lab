'use client';
import HoverCard from './HoverCard';
import Link from 'next/link';
import './categories.scss';
import { usePathname } from 'next/navigation';

const Categories = () => {
  const index = usePathname();

  const links = [
    {
      href: '/category/t-shirt',
      title: 'T-shirts',
    },
    {
      href: '/category/jacket',
      title: 'Jackets',
    },
    {
      href: '/category/jean',
      title: 'Jeans',
    },
    {
      href: '/category/shoe',
      title: 'Shoes',
    },
    {
      href: '/category/hat',
      title: 'Hats',
    },
  ];

  return (
    <div className='nav_categories_links'>
      <ul>
        {links.map((link, _index) => (
          <li key={_index} className={`${index === link.href && 'active'}`}>
            <Link href={link.href}>
              <HoverCard>{link.title}</HoverCard>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
