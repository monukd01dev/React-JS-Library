import React from "react";
import ReactDOM from "react-dom/client";
//importing components
import Header from "./components/Header";
import Main from "./components/Main";
//pages
import About from "./components/About";
import Contact from "./components/Contact";
import MyError from "./components/MyError";

//react-rounter code
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

const Root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
	<div className="app">
		<Header />
		{/* <Main /> */}
		<UserContext.Provider
			value={{
				userName: "Abhijeet Kumar",
				userEmail: "monukd01dev@gmail.com",
				userAge: 18,
				isPro: true,
			}}
		>
			<Outlet />
		</UserContext.Provider>
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
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <MyError />,
	},
]);

Root.render(<RouterProvider router={appRoutes} />);
