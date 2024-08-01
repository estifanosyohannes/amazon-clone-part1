import React, { useContext, useState, useEffect } from "react";
import classes from "./orders.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from '../../Components/Product/ProductCard/ProductCard'

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const unsubscribe = db
        .collection("users")
        .doc(user?.uid)
        ?.collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          const fetchedOrders = snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));
          setOrders(fetchedOrders);
        });

      return () => unsubscribe();
    }
  }, [user]);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && <div style={{padding:"20px"}}>
            you don't have orders yet. 
          </div>}
          {/* Map over orders and display them */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>OrderID:{eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;

// import React, { useContext, useState, useEffect } from "react";
// import classes from "./orders.module.css";
// import LayOut from "../../Components/LayOut/LayOut";
// import { db } from "../../Utility/firebase";
// import { DataContext } from "../../Components/DataProvider/DataProvider";

// function Orders() {
//   const [{ user }, dispatch] = useContext(DataContext);
//   const [orders, setOrders] = useState([]);
//   useEffect(() => {
//     if (user) {
//       db.collection("users")
//         .doc(user?.uid)
//         ?.collection("orders")
//         .orderBy("created", "desc")
//         .onSnapshot((snapshot) => {
//           console.log(snapshot);
//         });
//     } else {
//     }
//   }, []);
//   return (
//     <LayOut>
//       <section className={classes.container}>
//         <div className={classes.orders__container}>
//           <h2>Orders</h2>
//           {/* YOUR ORDERS */}
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Orders;
