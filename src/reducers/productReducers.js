import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  SET_CURRENT_PRODUCT,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [], currentProduct: {} }, action) => {
  switch (action.type) {
  case PRODUCT_LIST_REQUEST:
    return { ...state, loading: true, products: [] };
  case PRODUCT_LIST_SUCCESS:
    return { ...state, loading: false, products: action.payload };
  case PRODUCT_LIST_FAIL:
    return { ...state, loading: false, error: action.payload };
  case SET_CURRENT_PRODUCT:
    return { ...state, currentProduct: action.payload };
  default:
    return state;
  }
};
