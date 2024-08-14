import ReactDOM from "react-dom/client";
import { Fragment, useState, useEffect } from "react";
import SkeletonComponent from "./skeletonComponent";
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
	const [userList, setUserList] = useState();

	useEffect(() => {
		// setTimeout(() => {
		// 	getUser(100);
		// }, 2000);
		getUser(2000);
	}, []);

	async function getUser(noUsers = 2) {
		const data = await fetch(`https://randomuser.me/api/?results=${noUsers}`);
		const users = await data.json();
		setUserList(users?.results);
	}

	return (
		<Fragment>
			{userList ? (
				<Fragment>
					{userList.map((user, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Card key={index} {...user} />
					))}
				</Fragment>
			) : (
				<SkeletonComponent />
			)}
		</Fragment>
	);
}

ROOT.render(<App />);

/*
if (userList) return <SkeletonComponent />;

	return (
		<Fragment>
			{userList.map((user, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<Card key={index} {...user} />
			))}
		</Fragment>
	);
*/
