import React from "react";
import FeaturedRecipe from "../components/FeaturedRecipe";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import Recipes from "../components/Recipes";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      {/* <FeaturedRecipe /> */}
      <Recipes />
      <Footer />
    </div>
  );
};

export default App;
