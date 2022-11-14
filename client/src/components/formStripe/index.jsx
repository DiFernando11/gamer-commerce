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
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  deleteYourCart,
  numberGamesCarts,
  setRefreshUpdate,
  LogOutUser,
  refreshPurchasedGame,
} from "../../redux/actions";

const stripePromise = loadStripe(
  "pk_test_51KZFYxGVqYV1yoOdeYDsBoB0xPjcoDAWxCxGpC8s8RPoPagm0ck5YAGyLrESugaMlpu2RxUn4Y78sQCfmDOgvbul008uLmzwWl"
);

const CheckoutForm = ({ setModalVisible }) => {
  const stripe = useStripe();
  const sessionexpired = () => {
    Swal.fire({
      title: "The sesion has expried",
      text: "You were redirected to the login screen",
      icon: "info",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.replace("/login");
      }
    });
  };
  const elements = useElements();
  const user = useSelector((state) => state.user);
  const gameLocalStorage = JSON.parse(localStorage.getItem("name")) || [];
  const dataLocaleStorages = JSON.parse(localStorage.getItem("userSingIn"));
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const valueTotal = gameLocalStorage
    ? gameLocalStorage.reduce(
        (current, nextValue) =>
          current +
          (nextValue.with_discount ? nextValue.discount : nextValue.price),
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
        const { data } = await axios.post("/checkout", {
          stripeId: id,
          userId: user?.id,
          amount: valueTotal * 100, //cents
          cart: gameId,
        });

        if (data.message === "Successful Payment") {
          Swal.fire({
            title: "The transaction has been successful",
            icon: "success",
            confirmButtonText: "Accept",
          }).then((response) => {
            dispatch(deleteYourCart(dataLocaleStorages?.user?.id));
            localStorage.removeItem("name");
            dispatch(setRefreshUpdate());
            dispatch(refreshPurchasedGame());
            dispatch(numberGamesCarts(0));
          });
        }
        if (data.message === "Invalid card.") {
          Swal.fire({
            title: "An error has ocurred, please try again.",
            icon: "warning",
            confirmButtonText: "Accept",
          });
        }
        setModalVisible(false);
        elements.getElement(CardElement)?.clear(); // Limpia el input
      } catch (error) {
        if (error.response.data.denied) {
          dispatch(LogOutUser());
          localStorage.clear();
          localStorage.removeItem("name");
          sessionexpired();
        }

        console.log(error);
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.containerCardCredit}>
      <div className={styles.containerCardElement}>
        <CardElement /> {/* User Card Input */}
      </div>
      <img className={styles.chipCard} src={chipCard} alt="logo chip card" />
      <span className={styles.textPropetarioTrajetCredit}>{user?.name}</span>
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

function formStripe({ setModalVisible }) {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm setModalVisible={() => setModalVisible()} />
      </Elements>
    </div>
  );
}

export default formStripe;
