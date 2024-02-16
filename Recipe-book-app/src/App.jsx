import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import ItemDetails from "./pages/ItemDetails";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import recipes from "./data/Recipes.json";

function App() {
  const [currentAllRecipes, setCurrentAllRecipes] = useState(recipes);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          path={"/"}
          element={
            <HomePage
              currentAllRecipes={currentAllRecipes}
              setCurrentAllRecipes={setCurrentAllRecipes}
            />
          }
        />
        <Route path={"/about"} element={<About />} />
        <Route path={"/items-details"} element={<ItemDetails />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
