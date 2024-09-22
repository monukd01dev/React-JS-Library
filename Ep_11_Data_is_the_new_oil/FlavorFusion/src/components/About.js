import useOnlineStatus from "../../utils/useOnlineStatus";
import NoInternet from "./NoInternet";

function About() {
	const onlineStatus = useOnlineStatus();

	if (!onlineStatus) return <NoInternet />;
	return (
		<div className="about-con">
			<h1>About-Page</h1>
		</div>
	);
}

export default About;
