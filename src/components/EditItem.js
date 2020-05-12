import React from 'react';

const EditItem = (props) => {
  // console.log(props.location.data);

  return (
    <div>
      <h1>ID:{props.location.data.id}</h1>
      <h1>TITLE:{props.location.data.title}</h1>
    </div>
  );
};

export default EditItem;
