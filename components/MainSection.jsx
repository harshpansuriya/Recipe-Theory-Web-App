import React from "react";
import bowlRecipe from "../src/assets/recipePhotos/bowlRecipe.jpg";

const MainSection = () => {
  return (
    <div className="container">
      <div>
        <h1 className="heading">
          <span className="gradientText">Hi There</span> 👋
        </h1>
        <p className="subHeading">Let's build the Masterpiece today...</p>
      </div>

      <img className="mainSecPhoto" src={bowlRecipe} alt="Bowl Recipe" />
    </div>
  );
};

export default MainSection;
