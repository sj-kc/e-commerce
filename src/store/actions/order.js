export const addOrder = (product = {}, value) => {
  return {
    type: "ADD_ORDER",
    product: {
      ...product,
      value,
    },
  };
};
