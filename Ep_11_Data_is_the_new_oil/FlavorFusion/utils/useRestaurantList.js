import { SWIGGY_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantList = () => {
	const [resList, setResList] = useState([]);
	const [resConstList, setResConstList] = useState([]);
	const [searchKey, setSearchKey] = useState("");

	useEffect(() => {
		async function getRestaurants() {
			try {
				const response = await fetch(SWIGGY_API);

				if (!response.ok) {
					throw new Error("Failed to Fetch RestaurantList");
				}

				const data = await response.json();
				const restaurantList =
					data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
						?.restaurants || [];
				setResConstList(restaurantList);
				setResList(restaurantList);
			} catch (error) {
				console.error(`Error fetching restaurants : ${error}`);
			}
		}

		getRestaurants();
	}, []);

	return {
		resList,
		setResList,
		resConstList,
		setResConstList,
		searchKey,
		setSearchKey,
	};
};

export default useRestaurantList;
