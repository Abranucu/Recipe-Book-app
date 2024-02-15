import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Lo siento, te has perdido.</h1>

      <Link to={"/"}>Vuelve a casa</Link>
    </div>
  );
}

export default NotFound;
