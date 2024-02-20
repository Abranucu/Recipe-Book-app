import RecipesList from "../components/RecipesList";
import AddForms from "../components/AddForms";
import allRecipes from "../data/Recipes.json";
import { useState } from "react";

function HomePage(props) {
  return (
    <div>
      <AddForms setCurrentAllRecipes={props.setCurrentAllRecipes} />
      <RecipesList
        currentAllRecipes={props.currentAllRecipes}
        setCurrentAllRecipes={props.setCurrentAllRecipes}
        favRecipes={props.favRecipes}
        setFavRecipes={props.setFavRecipes}
      />
    </div>
  );
}

export default HomePage;
