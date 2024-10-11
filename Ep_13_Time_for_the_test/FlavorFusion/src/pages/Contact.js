import useOnlineStatus from "../../utils/useOnlineStatus";
import NoInternet from "../components/NoInternet";

function Contact() {
	const onlineStatus = useOnlineStatus();

	if (!onlineStatus) return <NoInternet />;
	return (
		<div className="contact-con">
			<h1>Contact-Page</h1>
			<form action="">
				<input type="text" placeholder="name" />
				<br />
				<input type="password" placeholder="password" />
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Contact;
