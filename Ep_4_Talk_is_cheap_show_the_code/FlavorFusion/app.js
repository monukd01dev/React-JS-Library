import React from "react";
import ReactDOM from "react-dom/client";

// importing data from data/restaurants.json
import restaurantsList from "./data/restaurants.json";
console.log(restaurantsList);

const Root = ReactDOM.createRoot(document.getElementById("root"));

// components
/*
  After planning for the UI now it’s time to do LLP (Low Level Planning)
By seeing the basic UI I have to identify what major components my project have

Header
  -Logo
  -Nav Items
Main
  -Search
  -Resturant-container
  -restro-cards
Footer
  -copyright 
  -links
  -address
  -contacts
*/

// Header
const Header = () => (
  <div className="header">
    <div className="logo">
      {/* <img src="https://i.ibb.co/ZGNq6WG/Flavor-Fusion-Logo.png" /> */}
      <img src="FFL.fdc8a8d4.png" />
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

// Main-Starts Here

//search component

const Search = () => (
  <div className="search">
    <input type="text" placeholder="What are you craving today?"></input>
    <button className="search-btn">
      <i className="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
);

//resturant card component

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <div className="__card-img"></div>
      <h3 className="__name">Burger Singh</h3>
      <p className="__cuisines">Burger, Veg-Pizza, Beverage</p>
      <div className="__details">
        <div className="__ratings">
          <i className="fa-solid fa-star"></i>
          <span className="__text">4.5</span>
        </div>

        <i className="fa-solid fa-circle __dot"></i>

        <div className="__timing">27 MIN</div>

        <i className="fa-solid fa-circle __dot"></i>

        <div className="__offer">&#8377;400 FOR TWO</div>
      </div>
      <hr />
      <div className="__discounts">
        <div>
          <span>
            <i className="fi fi-sr-badge-percent"></i>
          </span>
          FREE DELIVERY
        </div>
      </div>
    </div>
  );
};

const Main = () => (
  <div className="main">
    <div className="search-con">
      <Search />
    </div>
    <div className="restaurant-container">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  </div>
);

// Main-Ends Here

//our app
const AppLayout = () => (
  <div className="app">
    <Header />
    <Main />
  </div>
);

Root.render(<AppLayout />);
