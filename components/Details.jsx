import React from "react";

function Details({ props }) {
  return (
    <div className="detailContainer">
      <h1 className="heading2">Details</h1>
      <p>Build Time: {props}</p>
      {console.log(`details log: ${props}`)}
      <p>Ingridients: </p>
      <p>Recipe: </p>
    </div>
  );
}

export default Details;
