import React, { useContext } from "react";
import Modal from "../ui/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/CurrencyFormatter";
import Button from "../ui/Button";
import UserProgressContext from "../store/UserProgressContext";
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext)
  const totalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  const handleCloseCart = ()=>{
    userProgressCtx.hideCart()
  }
  return (
    <Modal className="cart" open={userProgressCtx.progress === "CART"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart} textOnly>Close</Button>
        <Button>Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
