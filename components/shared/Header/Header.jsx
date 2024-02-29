import Categories from '@/components/ui/hoverCategory/Categories';
import './header.scss';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <Link href='/' className='nav__logo'>
          <h1 className='nav__logo__text'>hasanarpat</h1>
        </Link>
        <div className='nav__categories'>
          <Categories />
        </div>
        <div className='nav__cart'>
          <Link href='/cart' className='nav__cart__link'>
            <FaShoppingCart />
            <span className='nav__cart__link__quantity'>2</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
