import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContex";
import CartItem from "./CartItem";
import "./Cart.css";

import Pay from "../Pay/Pay";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { Button, Form } from "react-bootstrap";

const Cart = () => {
  const { cartList, EmptyCart, TotalProducts, TotalPrice } =
    useContext(CartContext);

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  async function createOrder(e) {
    e.preventDefault();

    let order = {};

    order.buyer = dataForm;
    order.total = TotalPrice();
    order.items = cartList.map((i) => {
      const id = i.producto.id;
      const name = i.producto.name;
      const price = i.producto.price * i.count;

      return { id, name, price };
    });

    const db = getFirestore();

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((resp) => alert(`Su numero de compra es ${resp.id}`))
      .catch((err) => console.log(err))
      .finally(() => {
        EmptyCart();
      });
  }

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="container">
        <div className="DivUno">
          {cartList.length < 1 ? (
            "No existe productos en el carrito"
          ) : (
            <div>
              {cartList.map((i) => (
                <CartItem
                  className="CartItem"
                  key={i.producto.id}
                  producto={i.producto}
                />
              ))}
              <div className="DivDos">
                <p>Cantidad de productos agregados {TotalProducts}</p>
                <p>Precio todal $ {TotalPrice}</p>
                <button onClick={EmptyCart} className="buttonVaciar">
                  Vaciar carrito
                </button>
                <div className="form">
                  <h4>Please, complete this form</h4>
                  <Form onSubmit={createOrder}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        onChange={handleChange}
                        required={true}
                        id="name"
                        name="name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Phone"
                        onChange={handleChange}
                        required={true}
                        id="phone"
                        name="phone"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required={true}
                        id="email"
                        name="email"
                      />
                    </Form.Group>

                    <Button variant="success" size="sm" type="submit">
                      Confirm order
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
