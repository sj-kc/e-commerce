import { setProducts } from "./../../../store/actions/products";
import products from "../fixtures/products";

test("should setup products", () => {
  const action = setProducts(products[0]);
  expect(action).toEqual({
    type: "SET_PRODUCTS",
    products: {
      id: "11111",
      color: "white",
      department: "one",
      productName: "product",
      price: "11",
      product: "baby",
      description: "lorem",
    },
  });
});
