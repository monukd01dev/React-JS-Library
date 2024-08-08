import React from "react";
import ReactDOM from "react-dom/client";

//   stablish connection b/w React and HTML
const ROOT = ReactDOM.createRoot(document.getElementById("root"));

// now we create our element
const responsiveImage = React.createElement("img", {
  src: "https://source.unsplash.com/random",
  width: "100%",
});

// Finalising using render
ROOT.render(responsiveImage);
