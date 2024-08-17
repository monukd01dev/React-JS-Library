import React from "react";
import ReactDOM from "react-dom/client";
//importing components
import Header from "./components/Header";
import Main from "./components/Main";

const Root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
	<div className="app">
		<Header />
		<Main />
	</div>
);

Root.render(<AppLayout />);
