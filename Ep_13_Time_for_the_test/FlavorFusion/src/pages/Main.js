import useOnlineStatus from "../../utils/useOnlineStatus";
import Filter from "../components/Filter";
import NoInternet from "../components/NoInternet";

const Main = () => {
	const onlineStatus = useOnlineStatus();

	return (
		<div className="main">{onlineStatus ? <Filter /> : <NoInternet />}</div>
	);
};

export default Main;
