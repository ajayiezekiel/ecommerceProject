import ActionTypes from '../constants/ActionTypes';

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: product,
});

// export const removeSelectedProduct = (product) => {
//     return {
//         type: ActionTypes.REMOVE_SELECTED_PRODUCT,
//         payload: product
//     }
// };
