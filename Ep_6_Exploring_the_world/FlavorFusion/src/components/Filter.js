import RestaurantCard from "./RestaurantCard";
import SkeletonCard from "./SkeletonCard";
// import restaurantsList from "../../utils/restaurantsMockData.json";
import { SWIGGY_API } from "../../utils/constants";
import { useEffect, useState } from "react";

const Filter = () => {
	const [resList, setResList] = useState([]);
	const [resConstList, setResConstList] = useState([]);
	useEffect(() => {
		getRestaurants();
	}, []);

	async function getRestaurants() {
		const response = await fetch(SWIGGY_API);
		const data = await response.json();
		const restaurantList =
			data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;
		setResConstList(restaurantList);
		setResList(restaurantList);
	}

	return (
		<div className="con">
			<div className="filter">
				<div className="total-restaurants">
					<h2>{resList.length} Restaurants</h2>
				</div>
				<div className="filter-items">
					<div className="static-filters">
						<button
							type="button"
							className="static-btn"
							onClick={() => {
								setResList(resConstList);
							}}
						>
							All
						</button>
						<button
							type="button"
							className="static-btn"
							onClick={() => {
								setResList(
									resConstList
										.filter(({ info }) => info.avgRating > 4)
										.sort((a, b) => b.info.avgRating - a.info.avgRating),
								);
							}}
						>
							Rating
						</button>
						<button
							type="button"
							className="static-btn"
							onClick={() => {
								setResList(
									// [...restaurantsList].sort(
									// 	(a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime,
									// ),
									resConstList
										.filter(({ info }) => info.sla.deliveryTime < 30)
										.sort(
											(a, b) =>
												a.info.sla.deliveryTime - b.info.sla.deliveryTime,
										),
								);
							}}
						>
							Fastest Delivery
						</button>
						<button type="button" className="static-btn">
							Non-veg
						</button>
						<button type="button" className="static-btn">
							Desi
						</button>
					</div>
					<div className="custom-btn">
						<button type="button" className="filter-btn">
							Filter{" "}
							<span>
								<i className="fi fi-sr-settings-sliders" />
							</span>
						</button>
					</div>
				</div>
			</div>
			<div className="restaurant-container">
				{resList.length === 0
					? new Array(16)
							.fill(1)
							.map((e, index) => <SkeletonCard key={index} />)
					: resList.map((data) => (
							<RestaurantCard key={data?.info?.id} {...data?.info} />
						))}
			</div>
		</div>
	);
};

export default Filter;
