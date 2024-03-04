import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../Store/CartContext";

export default function Checkout() {
    useContext(CartContext)

  return (
    <Modal>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: </p>
      </form>
    </Modal>
  );
}
