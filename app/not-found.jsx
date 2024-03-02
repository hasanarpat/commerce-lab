import './not-found.scss';
import Link from 'next/link';
const NotFound = () => {
  return (
    <div className='not-found'>
      <p>The page you are looking for is not found nor available right now.</p>
      <Link href='/'>Please keep looking for our other products</Link>

      <Link href='/'>
        <h1>hasanarpat</h1>
      </Link>
    </div>
  );
};

export default NotFound;
