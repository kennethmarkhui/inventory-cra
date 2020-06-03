import React, { useReducer } from 'react';
import axios from 'axios';

import ItemsContext from './itemsContext';
import ItemsReducer from './itemsReducer';
import {
  FETCH_ITEMS,
  FETCH_ITEM,
  CLEAR_ITEM,
  ADD_ITEM,
  SET_ISLOADING,
  SET_ERROR,
  CLEAR_ERROR,
  DELETE_ITEM,
} from '../actionTypes';

const ItemsState = (props) => {
  const initialState = {
    items: null,
    item: null,
    isLoading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(ItemsReducer, initialState);

  //   FETCH_ITEMS
  const fetchItems = async () => {
    try {
      setIsLoading();
      // 'http://jsonplaceholder.typicode.com/photos?_limit=100'
      // 'https://my.api.mockaroo.com/api/items?key=7d747620'
      const res = await axios.get('http://localhost:5000/api/items');

      dispatch({ type: FETCH_ITEMS, payload: res.data });
    } catch (error) {
      // console.log(error.response);
      setError(error.response.data.msg);
    }
  };

  //   FETCH_ITEM
  const fetchItem = async (id) => {
    try {
      setIsLoading();
      const res = await axios.get(
        `https://my.api.mockaroo.com/api/items/${id}?key=7d747620`
      );
      dispatch({ type: FETCH_ITEM, payload: res.data });
    } catch (error) {
      // console.log(error.response.data.error);
      setError(error.response.data.msg);
    }
  };

  // ADD_ITEM
  const addItem = async (item) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      setIsLoading();
      const res = await axios.post(
        'http://localhost:5000/api/items',
        item,
        config
      );
      dispatch({ type: ADD_ITEM, payload: res.data });
    } catch (error) {
      setError(error.response.msg);
    }
  };

  //   DELETE_ITEM
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/items/${id}`);
      dispatch({ type: DELETE_ITEM, payload: id });
    } catch (error) {
      setError(error.response.msg);
    }
  };

  //   CLEAR_ITEM
  const clearItem = () => dispatch({ type: CLEAR_ITEM });

  //   SET_ISLOADING
  const setIsLoading = () => dispatch({ type: SET_ISLOADING });

  //   SET_ERROR
  const setError = (msg) => {
    dispatch({ type: SET_ERROR, payload: msg });
  };

  //   CLEAR_ERROR
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  return (
    <ItemsContext.Provider
      value={{
        items: state.items,
        item: state.item,
        isLoading: state.isLoading,
        error: state.error,
        fetchItems,
        fetchItem,
        clearItem,
        addItem,
        deleteItem,
        clearError,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsState;