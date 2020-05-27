import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Spinner from './Spinner';

const EditItem = (props) => {
  const itemId = useParams().id;
  const [itemToEdit, setItemToEdit] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `https://my.api.mockaroo.com/api/items/${itemId}?key=7d747620`
      );
      setItemToEdit(res.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [itemId]);

  return (
    <React.Fragment>
      {isLoading && <Spinner />}
      {!isLoading && itemToEdit && (
        <React.Fragment>
          <p>{itemToEdit.id}</p>
          <p>{itemToEdit.storage}</p>
          <p>{itemToEdit.name}</p>
          <p>{itemToEdit.category}</p>
          <p>{itemToEdit.location.country}</p>
          <p>{itemToEdit.time_period}</p>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EditItem;
