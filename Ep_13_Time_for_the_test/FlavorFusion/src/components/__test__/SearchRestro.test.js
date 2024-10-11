import Filter from "../Filter";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import resListMock from "../__mocks__/resListMockData.json";

//global object is where ever the render function renders, it will replace the fetch function it was there but in our case fetch() in not defined that's why we are creating a fake fetch() basically mocking		//jest.fn giving the fetch function context that we have mocked extactly how an original fetch will work
global.fetch = jest.fn(() => {
	return Promise.resolve({
		ok: true,
		json: () => Promise.resolve(resListMock),
	});
});

global.crypto.randomUUID = jest.fn(() => {
	return Math.random() * 10000 * (Math.random() * 10);
});

// fetch function returns a promise that resolve in an object usually we named as response, and this have a property named as json and it's value is a function which returns the promise and resolving with the data  and that's what we have mocked here...

it("Should search RestaurantLists for ice text input", async () => {
	await act(async () => {
		return render(
			<BrowserRouter>
				<Filter />
			</BrowserRouter>,
		);
	});

	const searchInput = screen.getByTestId("SearchRestroInp");
	const searchBtn = screen.getByTestId("SearchRestroBtn");
	const restroCardsBefore = screen.getAllByTestId("restaurantCard");
	// filter-Test
	fireEvent.change(searchInput, { target: { value: "ice" } });
	fireEvent.click(searchBtn);

	const restroCardsAfter = screen.getAllByTestId("restaurantCard");

	expect(restroCardsBefore.length).toBe(20);
	expect(restroCardsAfter.length).toBe(2);
});

// console.error
//     Warning: An update to Filter inside a test was not wrapped in act(...).

//     When testing, code that causes React state updates should be wrapped into act(...):

//     act(() => {
//       /* fire events that update state */
//     });
//     /* assert on the output */
