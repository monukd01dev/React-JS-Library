import React from "react";
import ReactDOM from "react-dom/client";

const Root = ReactDOM.createRoot(document.getElementById("root"));

// components

// header
const Header = () => (
  <div className="header">
    <div className="logo">
      <img src="https://i.ibb.co/ZGNq6WG/Flavor-Fusion-Logo.png" />
    </div>
    <div className="nav-items">
      <a href="#home">Home</a>
      <a href="#home">Contact</a>
      <a href="#home">About</a>
      <a href="#home">
        <i className="fa-solid fa-cart-shopping"></i>
      </a>
    </div>
  </div>
);

//resturant card component

// const Card = () => <h1>hello</h1>;

//main

const Main = () => (
  <div className="main">
    <div className="search-con">
      <div className="search">
        <input type="text"></input>
        <div className="search-btn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
    <div className="restro-con">{/* <Card /> */}</div>
  </div>
);

//our app
const AppLayout = () => (
  <div className="app">
    <Header />
    <Main />
  </div>
);

Root.render(<AppLayout />);
