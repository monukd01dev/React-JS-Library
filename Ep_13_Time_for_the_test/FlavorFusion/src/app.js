//importing components
import Header from "./components/Header";

//react-router-dom code
import { Outlet } from "react-router-dom";

// redux code
import appStore from "../utils/appStore";
import { Provider } from "react-redux";

const AppLayout = () => {
	return (
		<Provider store={appStore}>
			<div className="app">
				<Header />
				<Outlet />
			</div>
		</Provider>
	);
};

export default AppLayout;
