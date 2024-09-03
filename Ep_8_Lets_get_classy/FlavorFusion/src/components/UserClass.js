import React from "react";
import { GITHUB_USER_API, social } from "../../utils/constants";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			userData: undefined,
		};
	}

	async componentDidMount() {
		const response = await fetch(`${GITHUB_USER_API}monukd01dev`);
		const data = await response.json();
		this.setState({
			userData: data,
		});
	}

	render() {
		// const { name, stack } = this.props;
		const { userData } = this.state;

		if (!userData) return <h1>Loading...</h1>;

		const { avatar_url, name, company } = userData;
		return (
			<div className="card-client">
				<div className="user-picture">
					<img src={avatar_url} alt="user-img" />
				</div>
				<p className="name-client">
					{" "}
					{name}
					<span>{company}</span>
				</p>
				<div className="social-media">
					<a href={social.GITHUB} target="blank">
						<i className="fa-brands fa-github" />
						<span className="tooltip-social">GitHub</span>
					</a>
					<a href={social.LINKEDIN} target="blank">
						<i className="fa-brands fa-linkedin" />
						<span className="tooltip-social">LinkedIn</span>
					</a>
					<a href={social.TWITTER} target="blank">
						<i className="fa-brands fa-x-twitter" />
						<span className="tooltip-social">Twitter</span>
					</a>
					<a href={social.INSTAGRAM} target="blank">
						<i className="fa-brands fa-instagram" />
						<span className="tooltip-social">Instagram</span>
					</a>
				</div>
			</div>
		);
	}
}

export default UserClass;
