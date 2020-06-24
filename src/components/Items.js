import React from 'react';
import { Row } from 'reactstrap';

import Item from './Item';

const Items = ({ items }) => {
  return (
    <Row>
      {items.map((item) => {
        return <Item item={item} key={item._id} />;
      })}
    </Row>
  );
};

export default Items;
