import React from 'react';
import { Row } from 'reactstrap';

import Item from './Item';

const Items = ({ items }) => {
  return (
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
  );
};

export default Items;
