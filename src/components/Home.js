import React, { useEffect, useContext } from 'react';

import Spinner from './Spinner';
import Items from './Items';
import Pagination from './Pagination';

import ItemsContext from '../context/items/itemsContext';

let renderCount = 0;

const Home = () => {
  renderCount++;
  const itemsContext = useContext(ItemsContext);
  const {
    isLoading,
    items,
    fetchItems,
    clearItems,
    pageNumber,
    setPage,
    pagination,
  } = itemsContext;

  useEffect(() => {
    fetchItems(pageNumber);
    // eslint-disable-next-line
  }, [pageNumber]);

  useEffect(() => {
    // componentWillUnmount
    return () => clearItems();
    // eslint-disable-next-line
  }, []);

  const paginationHandler = (e) => {
    // console.log(e.currentTarget.value);
    setPage(e.currentTarget.value);
  };

  return (
    <React.Fragment>
      {isLoading && <Spinner />}
      {!isLoading && items && (
        <React.Fragment>
          <Items items={items} />
          <Pagination
            pagination={pagination}
            paginationHandler={paginationHandler}
          />
        </React.Fragment>
      )}
      Home Component Render Count: {renderCount}
    </React.Fragment>
  );
};

export default Home;
