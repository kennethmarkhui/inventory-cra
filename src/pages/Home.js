import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Alert } from 'reactstrap';

import Spinner from '../components/Spinner';
import Items from '../components/Items';
import Pagination from '../components/Pagination';
import Filter from '../components/Filter';

import ItemsContext from '../context/items/itemsContext';

let renderCount = 0;

const Home = () => {
  renderCount++;

  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);

  const itemsContext = useContext(ItemsContext);
  const { isLoading, items, fetchItems, clearItems, pagination } = itemsContext;

  useEffect(() => {
    fetchItems(searchParams.toString());
    // eslint-disable-next-line
  }, [history.location.search]);

  useEffect(() => {
    // componentWillUnmount
    return () => clearItems();
    // eslint-disable-next-line
  }, []);

  const changePageHandler = (e) => {
    // console.log(e.currentTarget.value);
    searchParams.set('page', e.currentTarget.value);
    history.push(history.location.pathname + '?' + searchParams.toString());
  };

  return (
    <React.Fragment>
      {isLoading && <Spinner />}
      {!isLoading && items && (
        <React.Fragment>
          {items.length === 0 ? (
            <Col>
              <Alert color="secondary text-center">
                <strong>No Items</strong>
              </Alert>
            </Col>
          ) : (
            <React.Fragment>
              <Filter />
              <hr />
              <Items items={items} />
              <hr />
              <Pagination
                pagination={pagination}
                changePageHandler={changePageHandler}
              />
            </React.Fragment>
          )}
        </React.Fragment>
      )}
      Home Component Render Count: {renderCount}
    </React.Fragment>
  );
};

export default Home;
