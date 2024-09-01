import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		const { name, stack } = this.props;

		const userStyles = {
			border: "1px solid black",
			width: "fit-content",
			margin: "50px auto",
		};
		return (
			<div className="card-client">
				<div className="user-picture">
					<svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
						<path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
					</svg>
				</div>
				<p className="name-client">
					{" "}
					{name}
					<span>{stack}</span>
				</p>
				<div className="social-media">
					<a href="#">
						<i class="fa-brands fa-github" />
						<span className="tooltip-social">GitHub</span>
					</a>
					<a href="#">
						<i class="fa-brands fa-linkedin" />
						<span className="tooltip-social">LinkedIn</span>
					</a>
					<a href="#">
						<i class="fa-brands fa-x-twitter" />
						<span className="tooltip-social">Twitter</span>
					</a>
					<a href="#">
						<i class="fa-brands fa-instagram" />
						<span className="tooltip-social">Instagram</span>
					</a>
				</div>
			</div>
		);
	}
}

export default UserClass;
