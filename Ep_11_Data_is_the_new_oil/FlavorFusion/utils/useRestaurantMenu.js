import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "./constants";

export default function useRestaurantMenu(resId) {
	const [resDetails, setResDetails] = useState(null);
	const [accordionStaticList, setAccordionStaticList] = useState([]);
	const [accordionList, setAccordionList] = useState([]);
	const [whichAccordion, setWhichAccordion] = useState(0);
	const [whichFilterBtn, setwhichFilterBtn] = useState(0);

	useEffect(() => {
		const fetchMenu = async () => {
			try {
				const response = await fetch(RESTAURANT_MENU_API + resId);
				if (!response.ok) {
					throw new Error("Failed to Fetch Restaurant Menu");
				}
				const data = await response.json();
				setResDetails(data?.data?.cards[2]?.card?.card?.info);

				const accordionDataList =
					data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
						(e) =>
							e?.card?.card?.["@type"] ===
							"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
					) || [];

				if (!data?.veg) {
					// Deep copy for the static list to ensure it's not altered
					const deepCopyForStaticList = structuredClone(accordionDataList);

					// Set the static list with the deep copy
					setAccordionStaticList(deepCopyForStaticList);

					// Set the dynamic list with the original (or shallow copy) data
					setAccordionList(accordionDataList);
				}
			} catch (error) {
				console.error(`Error fetching restaurant menu : ${error}`);
			}
		};

		fetchMenu();
	}, [resId]);

	return {
		resDetails,
		setResDetails,
		accordionStaticList,
		setAccordionStaticList,
		accordionList,
		setAccordionList,
		whichAccordion,
		setWhichAccordion,
		whichFilterBtn,
		setwhichFilterBtn,
	};
}
