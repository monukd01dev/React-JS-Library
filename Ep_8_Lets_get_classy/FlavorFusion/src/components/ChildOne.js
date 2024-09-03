import React from "react";

class ChildOne extends React.Component {
	constructor(props) {
		super(props);
		console.log("Child_1 : Constructor");
	}

	render() {
		console.log("Child_1 : Render");
		return <div className="childOne">Child_1 : On DOM</div>;
	}

	componentDidMount() {
		console.log("Child_1 : Mounted");
	}

	componentDidUpdate() {
		console.log("Child_1 : Updated");
	}

	componentWillUnmount() {
		console.log("Child_1 : Unmounted");
	}
}

export default ChildOne;
