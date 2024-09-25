import useOnlineStatus from "../../utils/useOnlineStatus";
import Filter from "./Filter";
import NoInternet from "./NoInternet";

const Main = () => {
	const onlineStatus = useOnlineStatus();


	return (
		<div className="main">{onlineStatus ? <Filter /> : <NoInternet />}</div>
	);
};

export default Main;
