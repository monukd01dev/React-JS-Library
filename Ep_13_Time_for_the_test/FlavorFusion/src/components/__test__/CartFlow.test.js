import { screen, render, waitFor, fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { act } from "react";
import appStore from "../../../utils/appStore";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import AppLayout from "../../app";
import resListMockData from "../__mocks__/resListMockData.json";
global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => Promise.resolve(resListMockData),
	});
});

global.crypto.randomUUID = jest.fn(() => {
	return Math.random() * 10000 * (Math.random() * 10);
});

describe("Restaurant Page and Cart Flow", () => {
	it("should navigate, select items, and manage cart correctly", async () => {
		await act(async () => {
			render(
				<MemoryRouter>
					<Provider store={appStore}>
						<AppLayout />
					</Provider>
				</MemoryRouter>,
			);
		});

		//step: 1 ,Checking all 20 restaurants are present
		await waitFor(() => {
			expect(screen.getByTestId("restaurantCard").length).toBe(20);
		});
	});
});
