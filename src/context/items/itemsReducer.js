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

export default (state, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload.items,
        pagination: action.payload.pagination,
        isLoading: false,
      };
    case FETCH_ITEM:
      return {
        ...state,
        item: action.payload,
        isLoading: false,
      };
    case CLEAR_ITEMS:
      return { ...state, items: [] };
    case CLEAR_ITEM:
      return { ...state, item: null };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        isLoading: false,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
        isLoading: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case SET_ISLOADING:
      return { ...state, isLoading: true };
    case SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case CLEAR_ERROR:
      return { ...state, error: null };
    case SET_PAGE:
      return { ...state, pageNumber: action.payload };
    default:
      return state;
  }
};
