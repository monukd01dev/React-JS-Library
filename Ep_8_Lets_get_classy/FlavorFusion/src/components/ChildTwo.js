import React from "react";

class ChildTwo extends React.Component {
	constructor(props) {
		super(props);
		console.log("Child_2 : Constructor");
	}

	render() {
		console.log("Child_2 : Render");
		return <div className="childOne">Child_2 : On DOM</div>;
	}

	componentDidMount() {
		console.log("Child_2 : Mounted");
	}

	componentDidUpdate() {
		console.log("Child_2 : Updated");
	}

	componentWillUnmount() {
		console.log("Child_2 : Unmounted");
	}
}

export default ChildTwo;
