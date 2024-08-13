import ReactDOM from "react-dom/client";
import user from "./EmployeeMocData.json";
import { Fragment, useState, useEffect } from "react";
// console.log(Array.isArray(user));

const ROOT = ReactDOM.createRoot(document.getElementById("root"));

const Card = (props) => {
	const {
		name: { first, last },
		location: { country },
		email,
		picture: { large },
	} = props;

	return (
		<div className="card">
			<div className="upper-content">
				<div className="image-con">
					<img src={large} alt="user-img" />
				</div>
				<div className="u-detail">
					<p>{`${first} ${last}`}</p>
					<p>{country}</p>
					<p>{email}</p>
				</div>
			</div>
			{/* <div className="about">{about}</div> */}
		</div>
	);
};

function App() {
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		getUser(10);
	}, []);

	async function getUser(noUsers = 2) {
		const data = await fetch(`https://randomuser.me/api/?results=${noUsers}`);
		const users = await data.json();
		setUserList(users.results);
	}

	return (
		<Fragment>
			{userList.map((user, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<Card key={index} {...user} />
			))}
		</Fragment>
	);
}

ROOT.render(<App />);
