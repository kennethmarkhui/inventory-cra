import React from 'react';

import DUMMY_DATA from '../DUMMY_DATA.json';

const EditItem = (props) => {
  // console.log(props);

  // console.log(props.match.params.id);
  // console.log(DUMMY_DATA);
  const result = DUMMY_DATA.find(
    (item) => item.itemId === props.match.params.id
  );
  // console.log(result);

  return <h1>{result.name.en}</h1>;
};

export default EditItem;
