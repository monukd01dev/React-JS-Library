import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../../utils/restaurantsMockData.json";
import { useState } from "react";

const Filter = () => {
	// biome-ignore lint/style/useConst: <explanation>
	let [resList, setResList] = useState(restaurantsList);

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
								setResList(restaurantsList);
							}}
						>
							All
						</button>
						<button
							type="button"
							className="static-btn"
							onClick={() => {
								console.log("clicked");
								setResList(
									restaurantsList
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
									restaurantsList
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
				{resList.map((data) => (
					<RestaurantCard key={data?.info?.id} {...data?.info} />
				))}
			</div>
		</div>
	);
};

export default Filter;
