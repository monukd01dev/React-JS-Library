import React from "react";
import ReactDOM from "react-dom/client";
//importing components
import Header from "./components/Header";
import Main from "./components/Main";
//pages
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

//react-rounter code
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
	<div className="app">
		<Header />
		<Main />
	</div>
);

const appRoutes = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
]);

console.log(appRoutes);

Root.render(<RouterProvider router={appRoutes} />);
