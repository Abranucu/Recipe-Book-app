import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import ItemDetails from "./pages/ItemDetails";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/items-details"} element={<ItemDetails />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
