import React, { useEffect, useState } from "react";
import data from "./data.json";
import Details from "./Details";

const Recipes = () => {
  const [details, setDetails] = useState(false);

  // const openDetails = () => {
  //   setDetails = true;
  // };

  return (
    <div className="recipeContainer">
      <h1 className="heading2">Recipes</h1>
      <div className="cardContainer">
        {data.map((recipe) => {
          return (
            <div
              className="cardSubContainer"
              onClick={() => {
                console.log(`clicked on ${recipe.name}`);
              }}
            >
              <h1>{recipe.name}</h1>
              <p>Build Time: {recipe.buildTime}</p>
              <p>Ingridients: {recipe.ingridients}</p>
              <p>Recipe: {recipe.recipe}</p>
            </div>
          );
        })}
        <Details />
      </div>
    </div>
  );
};

export default Recipes;
