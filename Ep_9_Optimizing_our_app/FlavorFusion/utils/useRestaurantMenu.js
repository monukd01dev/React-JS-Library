import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "./constants";

export default function useRestaurantMenu(resId) {
	const [resDetails, setResDetails] = useState(null);
	const [accordionStaticList, setAccordionStaticList] = useState([]);
	const [accordionList, setAccordionList] = useState([]);

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
					data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
						.slice(2)
						.filter((e) => Array.isArray(e?.card?.card?.itemCards)) || [];

				// Deep copy for the static list to ensure it's not altered
				const deepCopyForStaticList = structuredClone(accordionDataList);

				// Set the static list with the deep copy
				setAccordionStaticList(deepCopyForStaticList);

				// Set the dynamic list with the original (or shallow copy) data
				setAccordionList(accordionDataList);
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
	};
}
