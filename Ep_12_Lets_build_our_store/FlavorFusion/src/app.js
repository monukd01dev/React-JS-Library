import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
//importing components
import Header from "./components/Header";
import Main from "./components/Main";
import ResMenuShimmer from "./components/ResMenuShimmer";
//pages
import Contact from "./components/Contact";
import MyError from "./components/MyError";

//react-rounter code
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// ! Lazy Loading
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const About = lazy(() => import("./components/About"));

// creating root
const Root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Outlet />
		</div>
	);
};

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
				element: (
					<Suspense fallback={<ResMenuShimmer />}>
						<About />
					</Suspense>
				),
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurant/:resId",
				element: (
					<Suspense fallback={<ResMenuShimmer />}>
						<RestaurantMenu />
					</Suspense>
				),
			},
		],
		errorElement: <MyError />,
	},
]);

Root.render(<RouterProvider router={appRoutes} />);
