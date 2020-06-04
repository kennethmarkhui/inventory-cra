import React, { useEffect, useContext } from 'react';
import { Row } from 'reactstrap';

import Item from './Item';
import Spinner from './Spinner';

import ItemsContext from '../context/items/itemsContext';

const Items = (props) => {
  const itemsContext = useContext(ItemsContext);
  const { isLoading, items, fetchItems, clearItems } = itemsContext;

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // componentWillUnmount
    return () => clearItems();
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      {isLoading && <Spinner />}
      {!isLoading && items && (
        <React.Fragment>
          <Row>
            {items.length === 0 ? (
              <h2>No Items</h2>
            ) : (
              items.map((item) => {
                return <Item dummy={item} key={item._id} />;
              })
            )}
          </Row>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Items;
