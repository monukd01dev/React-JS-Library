import { useContext } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
import NoInternet from "./NoInternet";
import UserContext from "../../utils/UserContext";

function About() {
	const onlineStatus = useOnlineStatus();

	if (!onlineStatus) return <NoInternet />;

	//? consuming my context
	const { userName, userEmail, userAge, isPro, setMainName } =
		useContext(UserContext);
	// ?
	return (
		<div className="about-con">
			<h1>About-Page</h1>
			<label htmlFor="changeUser">New User Name :</label>
			<input
				type="text"
				name="changeUser"
				id="changeUser"
				onChange={(e) => setMainName(e.target.value)}
			/>
			<table
				border={1}
				style={{
					marginTop: "40px",
					margin: "auto",
					fontSize: "1.5rem",
				}}
			>
				<thead>
					<tr>
						<th colspan={2}>UserDetails</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Name</th>
						<td>{userName}</td>
					</tr>
					<tr>
						<th>Email</th>
						<td>{userEmail}</td>
					</tr>
					<tr>
						<th>Age</th>
						<td>{userAge}</td>
					</tr>
					<tr>
						<th>Subscription</th>
						<td>{isPro ? "Pro" : "Noob"}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default About;
