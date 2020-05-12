import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Spinner from './Spinner';

const EditItem = (props) => {
  // console.log(props.location.data);
  const [redirct, setRedirct] = useState(false);

  useEffect(() => {
    if (!props.location.data) {
      setRedirct(true);
    }
  }, [props]);

  if (redirct) {
    return <Redirect to="/" />;
  } else {
    let content = <Spinner />;
    if (props.location.data) {
      content = (
        <div>
          <h1>ID:{props.location.data.id}</h1>
          <h1>TITLE:{props.location.data.title}</h1>
        </div>
      );
    }
    return content;
  }
};

export default EditItem;
