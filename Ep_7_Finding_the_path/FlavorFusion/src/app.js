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
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
	<div className="app">
		<Header />
		<Outlet />
	</div>
);

//basic routes
// const appRoutes = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <AppLayout />,
// 		errorElement: <Error />,
// 	},
// 	{
// 		path: "/about",
// 		element: <About />,
// 	},
// 	{
// 		path: "/contact",
// 		element: <Contact />,
// 	},
// ]);

// Children Routing to make header intact - using <Outlet/> component

const appRoutes = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Main />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
		errorElement: <Error />,
	},
]);

console.log(appRoutes);

Root.render(<RouterProvider router={appRoutes} />);
