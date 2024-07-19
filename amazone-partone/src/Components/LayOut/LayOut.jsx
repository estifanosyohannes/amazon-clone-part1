import React from 'react'
import Header from '../Heades/Header/Header'

function LayOut({ Children }) {
  return (
    <div>
      <Header />
      {Children}
    </div>
  );
}

export default LayOut
