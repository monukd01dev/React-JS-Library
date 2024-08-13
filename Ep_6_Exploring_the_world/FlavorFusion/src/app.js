import React from "react";
import ReactDOM from "react-dom/client";
//importing components
import Header from "./components/Header";
import Main from "./components/Main";

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

const AppLayout = () => (
	<div className="app">
		<Header />
		<Main />
	</div>
);

Root.render(<AppLayout />);
