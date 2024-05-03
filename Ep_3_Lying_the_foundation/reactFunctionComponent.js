// import React from "react";
import ReactDOM from "react-dom/client";

//creating connection
const Root = ReactDOM.createRoot(document.getElementById("root"));

//React Functional component

const Card = () => (
  <div className="card">
    <div className="img-con">
      <img src="https://source.unsplash.com/random" />
    </div>
    <div className="details">
      <h2>The Random Card</h2>
      <p>windy rainy mountain cloudy book beach forest sunny coffee river</p>
    </div>
  </div>
);

// rendering
Root.render([<Card />, <Card />, <Card />]);
