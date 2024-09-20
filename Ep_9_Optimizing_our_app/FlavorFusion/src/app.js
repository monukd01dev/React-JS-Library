import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
//importing components
import Header from "./components/Header";
import Main from "./components/Main";
import ResMenuShimmer from "./components/ResMenuShimmer";
//pages
import Contact from "./components/Contact";
import MyError from "./components/MyError";
// import RestaurantMenu from "./components/RestaurantMenu";
const RestaurantMenu = lazy(() => import('./components/RestaurantMenu'));

// * making About lazy-loading, dynamic import
// import About from "./components/About";
// ? 1. lazy(()=> import("./components/About"))
// ? 2. <Suspence fallback={/* yaha simmer dete hai */}></Suspence>

// ! let's see the code
const About = lazy(() => import("./components/About"));

//react-rounter code
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
	<div className="app">
		<Header />
		{/* <Main /> */}
		<Outlet />
	</div>
);

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
				element: <Suspense fallback={<ResMenuShimmer/>}>
					<About />
				</Suspense>,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurant/:resId",
				element: <Suspense fallback={<ResMenuShimmer/>}>
				<RestaurantMenu />
			</Suspense>,
			},
		],
		errorElement: <MyError />,
	},
]);

Root.render(<RouterProvider router={appRoutes} />);
