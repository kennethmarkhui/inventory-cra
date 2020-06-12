import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Spinner from './Spinner';
import Items from './Items';
import Pagination from './Pagination';

import ItemsContext from '../context/items/itemsContext';

let renderCount = 0;

const Home = () => {
  renderCount++;

  const history = useHistory();
  let searchParams = new URLSearchParams(history.location.search);

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
    fetchItems(searchParams.toString());
    // eslint-disable-next-line
  }, [pageNumber]);

  useEffect(() => {
    // componentWillUnmount
    return () => clearItems();
    // eslint-disable-next-line
  }, []);

  const paginationHandler = (e) => {
    // console.log(e.currentTarget.value);
    searchParams.set('page', e.currentTarget.value);
    history.push(history.location.pathname + '?' + searchParams.toString());

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
