import useOnlineStatus from "../../utils/useOnlineStatus";
import Filter from "./Filter";
import NoInternet from "./NoInternet";

const Main = () => {
	const onlineStatus = useOnlineStatus();

	console.log(`OnlineStatus : ${onlineStatus}`);
	return (
		<div className="main">{onlineStatus ? <Filter /> : <NoInternet />}</div>
	);
	// if (!onlineStatus) return <NoInternet />;
	// return (
	// 	<div className="main">
	// 		<Filter />
	// 	</div>
	// );
};

export default Main;
