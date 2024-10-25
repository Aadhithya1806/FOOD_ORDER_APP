import React, { useContext } from "react";
import Modal from "../ui/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/CurrencyFormatter";
import Button from "../ui/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };
  const handleCheckout = () => {
    userProgressCtx.showCheckout();
  };
  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "CART"}
      onClose={userProgressCtx.progress === "CART" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            qty={item.quantity}
            price={item.price}
            increaseHandler={() => {
              cartCtx.addItem(item);
            }}
            decreaseHandler={() => {
              cartCtx.removeItem(item);
            }}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart} textOnly>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleCheckout}>Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
