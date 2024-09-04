import RestaurantCard from "./RestaurantCard";
import SkeletonCard from "./SkeletonCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../../utils/useRestaurantList";

const Filter = () => {
	const { resList, setResList, resConstList, searchKey, setSearchKey } =
		useRestaurantList();

	return (
		<>
			<div className="search-con">
				<div className="search">
					<input
						type="text"
						placeholder="What are you craving today?"
						value={searchKey}
						onChange={(e) => {
							setSearchKey(e.target.value.trim().toLocaleLowerCase());
						}}
					/>

					<button
						type="button"
						className="search-btn"
						onClick={() => {
							const nextResList = resConstList.filter(({ info }) =>
								info.name.toLowerCase().includes(searchKey),
							);

							setResList(nextResList);
						}}
					>
						<i className="fa-solid fa-magnifying-glass" />
					</button>
				</div>
			</div>

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
								.map((e) => <SkeletonCard key={crypto.randomUUID()} />)
						: resList.map((data) => (
								<Link to={`/restaurant/${data?.info?.id}`} key={data?.info?.id}>
									<RestaurantCard {...data?.info} />
								</Link>
							))}
				</div>
			</div>
		</>
	);
};

export default Filter;
