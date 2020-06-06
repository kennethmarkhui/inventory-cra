import React, { useEffect, useContext } from 'react';
import { Row } from 'reactstrap';

import Item from './Item';
import Spinner from './Spinner';

import ItemsContext from '../context/items/itemsContext';

let renderCount = 0;

const Items = (props) => {
  renderCount++;
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
      Items Component Render Count: {renderCount}
    </React.Fragment>
  );
};

export default Items;
