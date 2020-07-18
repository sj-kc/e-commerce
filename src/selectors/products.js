export default (products, { text }) => {
  return products.filter((product) => {
    const textMatch = product.productName
      .toLowerCase()
      .includes(text.toLowerCase());

    return textMatch;
  });
};
