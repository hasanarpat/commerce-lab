import Card from '@/components/ui/card/Card';
import './page.scss';
import items from '@/app/data';
import { getCategoryItemsLength, getLimitedItems } from '@/app/action';
import Link from 'next/link';
import {redirect } from "next/navigation"

const offset = 10;

const Category = ({ params, searchParams }) => {
  const { id } = params;
  let data;
  let index;

  if (Object.keys(searchParams).length === 0) {
    index = 0;
    data = getLimitedItems(index, offset, id);
  } else {
    index = parseInt(searchParams.index);
    data = getLimitedItems(index, index + offset, id);
  }

  if (data.length === 0) redirect("/not-found")

  return (
    <div className='category-page'>
      <h2 className='category-page__title'>
        Category: <span>{id.toUpperCase()}</span>
      </h2>
      <div className='category-page__products'>
        {data.map((item, _index) => (
          <div key={_index}>
            <Card product={item} />
          </div>
        ))}
      </div>
      <div className='category-page__pagination'>
        {index === 0 ? (
          <span className='category-page__pagination__button disable'>
            Previous Page
          </span>
        ) : (
          <Link
            href={{
              pathname: `/category/${id}`,
              query: { index: index - offset },
            }}
            className='category-page__pagination__button'
          >
            Previous Page
          </Link>
        )}
        <span> | </span>
        {index + offset >= getCategoryItemsLength(id) ? (
          <span className='category-page__pagination__button disable'>
            Next Page
          </span>
        ) : (
          <Link
            href={{
              pathname: `/category/${id}`,
              query: { index: index + offset },
            }}
            className='category-page__pagination__button'
          >
            Next Page
          </Link>
        )}
      </div>
    </div>
  );
};

export default Category;
