export default (products, { text, filter }) => {
  const byQuery = products.filter((product) => {
    return product.productName.toLowerCase().includes(text.toLowerCase());
  });

  const byDeparment = products.filter((product) => {
    return product.department === filter.department;
  });

  const byColor = products.filter((product) => {
    return product.color === filter.color;
  });

  if (byDeparment.length) return byQuery && byDeparment;
  if (byColor.length) return byQuery && byColor;
  else return byQuery;
};
