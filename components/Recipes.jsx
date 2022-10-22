import React, { useEffect, useState } from "react";
import data from "./data.json";
import Details from "./Details";

const Recipes = () => {
  const [details, setDetails] = useState("false");

  // var name;
  // const openDetails = () => {
  //   setDetails = true;
  // };

  function ShowDetails(data) {
    return (
      //<Details props={name} />
      <div>
        {console.log(`clicked on ${data.name}`)}
        <h1>Name: {data.name}</h1>
        <h3>Time to build: {data.time}</h3>
        <h3>Id is: {data.id}</h3>
      </div>
    );
  }

  return (
    <div className="recipeContainer">
      <h1 className="heading2">Recipes</h1>
      <div className="cardContainer">
        {data.map((recipe) => {
          return (
            <div
              key={recipe.id}
              className="cardSubContainer"
              onClick={() => {
                const reci = {
                  name: "Harsh",
                  time: recipe.buildTime,
                  id: recipe.id,
                };
                setDetails("true");
                <ShowDetails data={reci} />;
              }}
            >
              <h1>{recipe.name}</h1>
              <p>Build Time: {recipe.buildTime}</p>
              <p>Ingridients: {recipe.ingridients}</p>
              <p>Recipe: {recipe.recipe}</p>
            </div>
          );
        })}
      </div>
      {details === "true" && <ShowDetails />}
    </div>
  );
};

export default Recipes;
