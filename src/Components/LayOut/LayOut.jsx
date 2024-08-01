import React from "react";
import Header from "../Heades/Header/Header";

function LayOut({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default LayOut;
