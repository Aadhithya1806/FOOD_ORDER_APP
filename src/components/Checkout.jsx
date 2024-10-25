import React, { act, useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "../ui/Modal";
import { currencyFormatter } from "../util/CurrencyFormatter";
import Input from "../ui/Input";
import Button from "../ui/Button";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const reqConf = {
  method: "POST", // HTTP method
  headers: {
    "Content-Type": "application/json",
  },
};
const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const { datas, isLoading, error, sendRequest,clearData } = useHttp(
    "http://localhost:3000/orders",
    reqConf
  );
  const totalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );

  const handleCloseCheckout = () => {
    userProgressCtx.hideCheckout();
  };

  const handleFinishCheckout = () => {
    userProgressCtx.hideCheckout();
    cartCtx.finishCart()
    clearData()

  };
  const handleOrderSubmission = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    sendRequest(
      JSON.stringify({
        order: { items: cartCtx.items, customer: customerData },
      })
    );
  };

  let actions = (
    <>
      <Button onClick={handleCloseCheckout} textOnly type="button">
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );
  if (isLoading) {
    actions = <span>Order Processing...</span>;
  }
  if (datas && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "CHECKOUT"}
        onClose={handleFinishCheckout}
      >
        {" "}
        <h2>Order Successfully Placed</h2>
        <p>Your Order was Submitted Successfully</p>
        
<p className="modal-actions"> 
    <Button onClick={handleFinishCheckout}>Okay</Button>
</p>
        
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressCtx.progress === "CHECKOUT"}
      onClose={handleCloseCheckout}
    >
      <form onSubmit={handleOrderSubmission} action="">
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
        <Input type="text" label="Full Name" id="name"></Input>
        <Input type="email" label="E-mail" id="email"></Input>
        <Input type="text" label="Street" id="street"></Input>
        <div className="control-row">
          <Input type="text" label="Postal Code" id="postal-code"></Input>
          <Input type="text" label="City" id="city"></Input>
        </div>
        {error && <Error title="Order Failed" message={error} />}
        <p className="modal-actions x">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
