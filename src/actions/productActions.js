import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  SET_CURRENT_PRODUCT,
} from '../constants/productConstants';

export const listProducts = () => {
  return dispatch => {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed')
      .then(res => {
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: res?.data });
      }).catch(err => {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: err?.response?.data?.message || err?.message });
      });
  };
};

export const setCurrentProduct = (product) => {
  return {
    type: SET_CURRENT_PRODUCT, payload: product
  };
};
