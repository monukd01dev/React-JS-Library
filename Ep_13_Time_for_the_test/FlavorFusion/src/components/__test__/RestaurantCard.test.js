import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import restroData from "../__mocks__/restaurantMockData.json";
import "@testing-library/jest-dom";

describe("Test Cases for <RestaurantCard/> component", () => {
	it("Should rendered with props data", () => {
		render(<RestaurantCard {...restroData} />);

		const restroName = screen.getByText("Chinese Wok");

		expect(restroName).toBeInTheDocument();
	});
});
