const {
  commerce: { color, department, productName, price, product },
  random: { uuid },
} = require("faker");

export default () => {
  const collector = [];

  for (let i = 0; i < 100; i++) {
    collector.push({
      id: uuid(),
      color: color(),
      department: department(),
      productName: productName(),
      price: price(),
      product: product(),
    });
  }

  return collector;
};
