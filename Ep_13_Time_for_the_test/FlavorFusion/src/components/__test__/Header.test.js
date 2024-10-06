import { screen, render } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

//used to group test cases
describe("Test cases for <Header/>", () => {
	//it is same as test() but it is just an alias for test and "it" make sense while reading
	it("Should render on the webpage", () => {
		//render that element
		render(
			//cause header uses <Link/>
			<BrowserRouter>
				{/* cause it uses redux so we have to provide it to header */}
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>,
		);
		//even we are running the header in the isolation but we have to provide dependencies

		//i got the rendered header inside my screen object
		const header = screen.getByRole("img", { name: "flavor fusion logo" });

		//assertion
		expect(header).toBeInTheDocument();
	});
});
