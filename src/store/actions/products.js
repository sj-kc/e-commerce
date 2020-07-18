import getProducts from "../../http";

const setProducts = (products = []) => {
  return {
    type: "SET_PRODUCTS",
    products,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    const products = getProducts();
    return dispatch(setProducts(products));
  };
};
