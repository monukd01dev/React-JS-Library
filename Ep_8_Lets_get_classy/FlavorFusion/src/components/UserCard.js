import React from "react";

class UserCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	render() {
		const { name, email } = this.props;
		const { count } = this.state;

		return (
			<>
				<button
					type="button"
					onClick={() => {
						this.setState({
							count: this.state.count + 1,
						});
					}}
				>
					{" "}
					Count +{" "}
				</button>
				<h1>Count : {count}</h1>
				<h2>{name}</h2>
				<h3>{email}</h3>
			</>
		);
	}

	componentDidMount() {
		console.log("UserCard : componentDidMount()");
	}
}

export default UserCard;
