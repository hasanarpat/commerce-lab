import './card.scss';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ product }) => {
  return (
    <div className='card'>
      <Image
        alt=''
        src={product.image}
        width={320}
        height={160}
        className='card__image'
      />
      <Link href={`/product/${product.id}`} className='card__details'>
        <h3>{product.name}</h3>
        {/* <span className='card__details__desc'>{product.description}</span> */}
        <div style={{ flexGrow: 1 }} />
        <p className='card__details__cost'>
          <span>{product.cost}</span>
          <span className='card__details__cost__promotion'>-%10</span>
        </p>
      </Link>
    </div>
  );
};

export default Card;
