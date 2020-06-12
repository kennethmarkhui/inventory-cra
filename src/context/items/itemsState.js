import React, { useReducer } from 'react';
import axios from 'axios';

import ItemsContext from './itemsContext';
import ItemsReducer from './itemsReducer';
import {
  FETCH_ITEMS,
  FETCH_ITEM,
  CLEAR_ITEMS,
  CLEAR_ITEM,
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  SET_ISLOADING,
  SET_ERROR,
  CLEAR_ERROR,
  SET_PAGE,
} from '../actionTypes';

const ItemsState = (props) => {
  const initialState = {
    items: null,
    item: null,
    isLoading: false,
    error: null,
    pageNumber: null,
    pagination: null,
  };

  const [state, dispatch] = useReducer(ItemsReducer, initialState);

  //   FETCH_ITEMS
  const fetchItems = async (seachParams) => {
    try {
      setIsLoading();
      // 'http://jsonplaceholder.typicode.com/photos?_limit=100'
      // 'https://my.api.mockaroo.com/api/items?key=7d747620'
      const res = await axios.get(
        `http://localhost:5000/api/items/?${seachParams}`
      );

      dispatch({ type: FETCH_ITEMS, payload: res.data });
    } catch (error) {
      if (error.response) {
        setError(error.response.data.msg);
      } else {
        setError(error.message);
      }
      console.log(error);
    }
  };

  //   FETCH_ITEM by refId
  const fetchItem = async (id) => {
    try {
      setIsLoading();
      const res = await axios.get(`http://localhost:5000/api/items/${id}`);
      dispatch({ type: FETCH_ITEM, payload: res.data });
    } catch (error) {
      // console.log(error);
      setError(error.response.data.msg);
      throw error;
    }
  };

  // ADD_ITEM
  const addItem = async (item) => {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
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
      setError(error.response.data.msg);
      throw error;
    }
  };

  //   UPDATE_ITEM
  const updateItem = async (item) => {
    // console.log(item.get('_id'));
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      setIsLoading();
      const res = await axios.patch(
        `http://localhost:5000/api/items/${item.get('_id')}`,
        item,
        config
      );
      dispatch({ type: UPDATE_ITEM, payload: res.data });
    } catch (error) {
      setError(error.response.data.msg);
      throw error;
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

  //   CLEAR_ITEMS
  const clearItems = () => dispatch({ type: CLEAR_ITEMS });

  //   CLEAR_ITEM
  const clearItem = () => dispatch({ type: CLEAR_ITEM });

  //   SET_ISLOADING
  const setIsLoading = () => dispatch({ type: SET_ISLOADING });

  //   SET_ERROR
  const setError = (msg) => dispatch({ type: SET_ERROR, payload: msg });

  //   CLEAR_ERROR
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  // SET_PAGE
  const setPage = (page) => dispatch({ type: SET_PAGE, payload: +page });

  return (
    <ItemsContext.Provider
      value={{
        items: state.items,
        item: state.item,
        isLoading: state.isLoading,
        error: state.error,
        pageNumber: state.pageNumber,
        pagination: state.pagination,
        fetchItems,
        fetchItem,
        clearItems,
        clearItem,
        addItem,
        updateItem,
        deleteItem,
        clearError,
        setPage,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsState;
