import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../../utils/restaurantsMockData.json";

const Main = () => (
	<div className="main">
		<div className="search-con">
			<Search />
		</div>
		<div className="restaurant-container">
			{restaurantsList.map((data) => (
				<RestaurantCard key={data?.info?.id} {...data?.info} />
			))}
		</div>
	</div>
);

export default Main;
