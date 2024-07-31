import React, { useContext, useState } from "react";
import classes from "./payment.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Api/axios";
import { Type } from "../../Utility/action.type";

function Payment() {
  const [{ user, basket },dispatch] = useContext(DataContext);
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const totalItem = basket?.reduce((amount, item) => amount + item.amount, 0);
  const total = basket.reduce(
    (amount, item) => amount + item.price * item.amount,
    0
  );

  const handleChange = (e) => {
    setCardError(e?.error?.message || "");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      const clientSecret = response.data?.clientSecret;

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
        // empity the basket
      dispatch({type: Type.EMPITY_BASKET})

      setProcessing(false);
      navigate("/orders", { state: { msg: "You have placed a new order" } });
    } catch (error) {
      console.error(error);
      setProcessing(false);
    }
  };

  return (
    <LayOut>
      <div className={classes.payment__header}>
        Checkout ({totalItem}) items
      </div>
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>Bole road</div>
            <div>Addis Ababa</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard key={item.id} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />
                <div className={classes.payment__price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit" disabled={processing}>
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="grey" size={12} />
                        <p>Please wait...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;







// import React, { useContext, useState } from "react";
// import classes from "./payment.module.css";
// import LayOut from "../../Components/LayOut/LayOut";
// import { DataContext } from "../../Components/DataProvider/DataProvider";
// import ProductCard from "../../Components/Product/ProductCard/ProductCard";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
// import { ClipLoader } from "react-spinners";
// import { db } from "../../Utility/firebase";

// import { useNavigate } from "react-router-dom";
// import { axiosInstance } from "../../Api/axios";

// function Payment() {
//   const [{ user, basket }] = useContext(DataContext);
//   console.log(user);
//   // total items
//   const totalItem = basket?.reduce((amount, item) => {
//     return amount + item.amount;
//   }, 0);
//   // total item price
//   const total = basket.reduce((amount, item) => {
//     return amount + item.price * item.amount;
//   }, 0);

//   const [cardError, setcardError] = useState(null);
//   // for no 3 step one
//   const [processing, setProcessing] = useState(false);

//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     // console.log(e);
//     e?.error?.message ? setcardError(e?.error?.message) : setcardError("");
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     try {
//       setProcessing(true);
//       // 1 backend || function ---> contact to he client secreat
//       const response = await axiosInstance({
//         method: "POST",
//         url: `/payment/create?total=${total * 100}`,
//       });
//       // console.log(response.data);
//       const clientSecret = response.data?.clientSecret;
//       // 2 clent side (react side confirmation)
//       const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       });
//       console.log(paymentIntent);
//       // 3 after conformation --> order firestore datbase save ,clear basket
//       await db
//         .collection("users")
//         .doc(user.uid)
//         .collection("orders")
//         .doc(paymentIntent.id)
//         .set({
//           basket: basket,
//           amount: paymentIntent.amount,
//           created: paymentIntent.created,
//         });

//       console.log(db);
//       setProcessing(false);
//       navigate("/orders", { state: { msg: "you have placed new order" } });
//     } catch (error) {
//       console.log(error);
//       setProcessing(false);
//     }
//   };

//   return (
//     <LayOut>
//       {/* header */}
//       <div className={classes.payment__header}>Checkout ({totalItem}) item</div>
//       {/* payment section  */}
//       <section className={classes.payment}>
//         {/* address */}
//         <div className={classes.flex}>
//           <h3>Delivery Address </h3>
//           <div>
//             <div>{user?.email}</div>
//             <div>Bole road </div>
//             <div> addis ababa</div>
//           </div>
//         </div>

//         <hr />
//         {/* product */}
//         <div className={classes.flex}>
//           <h3>Review items and delivery </h3>
//           <div>
//             {basket?.map((item) => (
//               <ProductCard product={item} flex={true} />
//             ))}
//           </div>
//         </div>
//         <hr />
//         {/* card form */}
//         <div className={classes.flex}>
//           <h3>Payment methods</h3>
//           <div className={classes.payment__card__container}>
//             <div className={classes.payment__details}>
//               <form onSubmit={handlePayment}>
//                 {/* show error */}
//                 {cardError && (
//                   <small style={{ color: "red" }}>{cardError}</small>
//                 )}
//                 <CardElement onChange={handleChange} />
//                 {/* price handling  */}
//                 <div className={classes.payment__price}>
//                   <div>
//                     <span style={{ display: "flex", gap: "10px" }}>
//                       <p>Total Order |</p> <CurrencyFormat amount={total} />
//                     </span>
//                   </div>
//                   <button type="submit">
//                     {processing ? (
//                       <div className={classes.loading}>
//                         <ClipLoader color="grey" size={12} />
//                         <p>Please wait...</p>
//                       </div>
//                     ) : (
//                       "Pay Now"
//                     )}
//                     Pay Now
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Payment;
