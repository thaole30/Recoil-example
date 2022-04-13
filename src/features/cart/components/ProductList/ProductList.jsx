import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { addToCart, cartState } from "../../cartState";
import { productListState } from "../../productState";

const ProductList = () => {
  const productList = useRecoilValue(productListState); //!useRecoilValue Returns the value of the given Recoil state
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddToCart = (product) => {
    const newCart = addToCart(cart, product);
    setCart(newCart);
  }

  return (
    <div>
      <h2>ProductList</h2>
      <ul className="product-list">
        {productList.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
            <button
              style={{ marginLeft: "1rem" }}
              onClick={() => handleAddToCart(product)}
            >
              Add to cart
            </button>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
