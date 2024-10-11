import React, { lazy, Suspense } from "react";
//importing components
import Main from "../pages/Main";
import ResMenuShimmer from "../components/ResMenuShimmer";
import UserCart from "../pages/UserCart";
import AppLayout from "../app";
//pages
import Contact from "../pages/Contact";
import MyError from "../pages/MyError";

//react-rounter code
import { createBrowserRouter } from "react-router-dom";

// ! Lazy Loading
const RestaurantMenu = lazy(() => import("../components/RestaurantMenu"));
const About = lazy(() => import("../pages/About"));

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
			{
				path: "/cart",
				element: <UserCart />,
			},
		],
		errorElement: <MyError />,
	},
]);

export default appRoutes;
