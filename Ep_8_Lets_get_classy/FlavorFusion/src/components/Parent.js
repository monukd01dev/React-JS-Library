import { Component } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

class Parent extends Component {
	// phase-1

	constructor(props) {
		super(props);
		console.log("Parent : Constructor");
	}

	// creates the element tree JSON representation
	render() {
		console.log("Parent : Render");
		return (
			<div className="Parent">
				Parent : On DOM
				<ChildOne />
				<ChildTwo />
			</div>
		);
	}

	// phase-2

	// run after the actual dom manipulation is done mean component is in the browser dom
	// run only on initial render
	componentDidMount() {
		console.log("Parent : Mounted");
		this.motor = setInterval(() => {
			console.log(
				"paani ke tanki bhar gae hai kripya motor band kar le jiye!!",
			);
		}, 1000);
	}

	//on re-render after the dom manipulation done
	//run on every re-render
	componentDidUpdate() {
		console.log("Parent : Updated");
	}

	//run when the component is removed from the dom suppose you change the home route to about now homes <Main/> component is unmounted
	componentWillUnmount() {
		console.log("Parent : Unmounted");
		clearInterval(this.motor);
	}
}

export default Parent;
