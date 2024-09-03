import UserClass from "./UserClass";
import UserCard from "./UserCard";

function About() {
	return (
		<div className="about-con">
			<h1>About-Page</h1>
			<div className="user-card-con">
				{/* <UserClass name={"Monu KD"} stack={"Java Developer"} /> */}
				<UserClass />
			</div>
		</div>
	);
}

export default About;
