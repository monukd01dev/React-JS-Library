import { RESTAURANT_MENU_API } from "../../utils/constants";
import { useEffect, useState } from "react";
import ResMenuShimmer from "./ResMenuShimmer";
import { useParams } from "react-router-dom";
import AccordionMenu from "./AccordionMenu";

//got info from here
//data.cards[2].card.card.info

function RestaurantMenu() {
	const [resDetails, setResDetails] = useState(null);
	const [accordionList, setAccordionList] = useState([]);
	const { resId } = useParams();

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		// const data = await fetch(RESTAURANT_MENU_API+resID);
		const response = await fetch(RESTAURANT_MENU_API + resId);
		const data = await response.json();
		setResDetails(data?.data?.cards[2]?.card?.card?.info);
		setAccordionList(
			data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(2),
		);
	};

	if (resDetails === null) return <ResMenuShimmer />;

	const {
		name,
		avgRating,
		totalRatingsString,
		costForTwoMessage,
		cuisines,
		areaName,
		sla,
		feeDetails,
	} = resDetails;

	return (
		<div className="restaurant-menu-con">
			<div className="res-intro-con">
				<div className="res-name-big">{name}</div>
				<div className="res-details-top-con">
					<div className="rating-and-price">
						<i className="fi fi-ss-circle-star" />
						<p>
							{avgRating} ({totalRatingsString})
						</p>
						<i className="fa-solid fa-circle __dot" />
						<p>{costForTwoMessage.toUpperCase()}</p>
					</div>
					<div className="dt-cuisines">{cuisines?.join(", ")}</div>
					<div className="dt-delivery">
						<div className="row-delivery">
							<i className="fa-solid fa-circle __dot" />{" "}
							<span className="sp-text ">Outlet</span>{" "}
							{areaName
								.split(" ")
								.map(
									(e) =>
										e.charAt(0).toUpperCase() + e.slice(1).toLocaleLowerCase(),
								)
								.join(" ")}
						</div>
						<div className="row-delivery">
							<i className="fa-solid fa-circle __dot __bar" />{" "}
							<span className="sp-text">
								{`${sla?.maxDeliveryTime}-${sla?.maxDeliveryTime}`} mins
							</span>
						</div>
					</div>
					<hr />
					<div className="dt-rider">
						<i className="fi fi-rs-biking-mountain" />{" "}
						<span className="kms">{sla?.lastMileTravel} kms</span> | ₹
						{feeDetails?.totalFee / 100} Delivery fee will apply
					</div>
				</div>
			</div>
			<div className="menu-head">
				<i class="fi fi-rr-horizontal-rule" />
				<span>menu</span>
				<i class="fi fi-rr-horizontal-rule" />
			</div>

			<hr />

			{accordionList
				.filter((e) => Array.isArray(e?.card?.card?.itemCards))
				.map((e) => {
					return (
						<AccordionMenu
							key={crypto.randomUUID()}
							accordionData={e?.card?.card}
						/>
					);
				})}
		</div>
	);
}

export default RestaurantMenu;
