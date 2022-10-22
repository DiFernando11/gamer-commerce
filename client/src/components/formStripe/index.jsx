import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js"; // Me trae stripe y voy a poder cargar la conexión a la plataforma
import {
  Elements, // Engloba a cada componenete, para que cada componente que contenga pueda acceder a la conexión de Stripe
  CardElement, // Componente Stripe que valida la tarjeta de crédito
  useStripe, // Llamo a Stripe para enviar un registro de método de pago.
  useElements, // Puede acceder a los elementos de Stripe
} from "@stripe/react-stripe-js";
import chipCard from "../../source/chipCard.png";
import styles from "./index.module.css";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51KZFYxGVqYV1yoOdeYDsBoB0xPjcoDAWxCxGpC8s8RPoPagm0ck5YAGyLrESugaMlpu2RxUn4Y78sQCfmDOgvbul008uLmzwWl"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const gameLocalStorage = JSON.parse(localStorage.getItem("name")) || [];
  const [loading, setLoading] = useState(false);

  const valueTotal = gameLocalStorage
    ? gameLocalStorage.reduce(
        (current, nextValue) => current + nextValue.price,
        0
      )
    : 0;

  const gameId = gameLocalStorage.map((el) => el.id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement), // Que elemento tiene el n° de tarjeta
    });
    setLoading(true);

    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post("http://localhost:3001/checkout", {
          stripeId: id,
          userId: 13,
          amount: valueTotal * 100, //cents
          cart: gameId,
        });
        console.log(data);

        elements.getElement(CardElement).clear(); // Limpia el input
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.containerCardCredit}>
      <CardElement /> {/* User Card Input */}
      <img className={styles.chipCard} src={chipCard} alt="logo chip card" />
      <span className={styles.textPropetarioTrajetCredit}>Diego Apolo</span>
      <button disabled={!stripe} className={styles.buttonCardCredit}>
        {loading ? (
          <div className="spinner-border text-light" role="status">
            <span className="sr-only"></span>
          </div>
        ) : (
          "Buy"
        )}
      </button>
    </form>
  );
};

function formStripe() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default formStripe;
