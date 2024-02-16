import RecipesList from "../components/RecipesList";
import AddForms from "../components/AddForms";
import allRecipes from "../data/Recipes.json"
import { useState } from 'react';

function HomePage(props) {
  console.log(props);
  

  return (
    <div>
      <AddForms setCurrentAllRecipes={props.setCurrentAllRecipes}  />
      <RecipesList currentAllRecipes={props.currentAllRecipes} setCurrentAllRecipes={props.setCurrentAllRecipes} />
    </div>
  );
}

export default HomePage;
