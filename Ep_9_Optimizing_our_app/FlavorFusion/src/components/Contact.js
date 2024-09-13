import useOnlineStatus from "../../utils/useOnlineStatus";
import NoInternet from "./NoInternet";

function Contact() {
	const onlineStatus = useOnlineStatus();

	console.log(`Contact : OnlineStatus : ${onlineStatus}`);
	if (!onlineStatus) return <NoInternet />;
	return (
		<div className="contact-con">
			<h1>Contact-Page</h1>
		</div>
	);
}

export default Contact;
