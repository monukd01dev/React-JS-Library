import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../../utils/restaurantsMockData.json";

const Main = () => {
	let resList = [...restaurantsList];
	// restaurantsList = [];it's readonly
	return (
		<div className="main">
			<div className="search-con">
				<Search />
			</div>
			<div className="filters">
				<button
					type="button"
					className="static-btn"
					onClick={() => {
						console.log("-----button clicked--------");
						console.log("before : ", resList);
						resList = [];
						console.log("After : ", resList);
						console.log("----- End --------\n");
					}}
				>
					Top Rated
				</button>
			</div>
			<div className="restaurant-container">
				{resList.map((data) => (
					<RestaurantCard key={data?.info?.id} {...data?.info} />
				))}
			</div>
		</div>
	);
};

export default Main;
