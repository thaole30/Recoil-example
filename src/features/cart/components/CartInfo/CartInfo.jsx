import React from "react";
import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../../cartState";

const CartInfo = () => {
  const cart = useRecoilValue(cartState);

  const total = useRecoilValue(cartTotal);

  return (
    <div>
      <h2>CartInfo</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.id}>
            {item.product.title}: {item.quantity}
          </li>
        ))}
      </ul>

      <h3>Total money: {total}VND</h3>
    </div>
  );
};

export default CartInfo;
