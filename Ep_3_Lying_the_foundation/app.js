import React from "react";
import ReactDom from "react-dom/client";

//creating connection
const ROOT = ReactDom.createRoot(document.getElementById("root"));

//creating an element
const heading = React.createElement(
  "h1",
  {
    id: "head",
    style: {
      color: "#149eca",
      textAlign: "center",
    },
  },
  "This is react generated Heading"
);

// using jsx => for creating heading

const myHead = (
  <h1 id="heading" className="heading" style={{ textAlign: "center" }}>
    This heading is created through JSX 🚀
  </h1>
);

//for multiline jsx code we use jsx inside ()

// lets create a card using jsx
const card = (
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

// const carrArr = new Array(5).fill({ ...card });
const carrArr = new Array(5).fill(card);

//redering the element inside the root
// ROOT.render(myHead);
ROOT.render(carrArr);
