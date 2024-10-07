import { render, screen } from "@testing-library/react";
import RestaurantCard,{promoteRestroCard} from "../RestaurantCard";
import restroData from "../__mocks__/restaurantMockData.json";

import "@testing-library/jest-dom";

describe("Test Cases for <RestaurantCard/> component", () => {
	it("Should rendered with props data", () => {
		render(<RestaurantCard {...restroData} />);

		const restroName = screen.getByText("Chinese Wok");

		expect(restroName).toBeInTheDocument();
	});
});

describe("Test Case for <PromotedRestroCard/> component",()=>{
	it("Should rendered with the promoted label",()=>{

		const PromotedRestroCard = promoteRestroCard(RestaurantCard);
		render(<PromotedRestroCard {...restroData}/>)

		const specialText = screen.getByText("Promoted");

		expect(specialText).toBeInTheDocument();
	})
})
