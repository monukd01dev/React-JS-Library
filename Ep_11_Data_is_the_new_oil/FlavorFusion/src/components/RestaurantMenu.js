import ResMenuShimmer from "./ResMenuShimmer";
import { useParams } from "react-router-dom";
import AccordionMenu from "./AccordionMenu";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import useOnlineStatus from "../../utils/useOnlineStatus";
import NoInternet from "./NoInternet";

function RestaurantMenu() {
	const onlineStatus = useOnlineStatus();
	const { resId } = useParams();
	const {
		resDetails,
		accordionStaticList,
		accordionList,
		setAccordionList,
		whichAccordion,
		setWhichAccordion,
		whichFilterBtn,
		setwhichFilterBtn,
	} = useRestaurantMenu(resId);

	if (!onlineStatus) return <NoInternet />;

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
		veg,
	} = resDetails;

	const foodFilterLogic = (category, btnNum) => {
		// btn color and active filter-btn logic
		if (whichFilterBtn !== btnNum) {
			setwhichFilterBtn(btnNum);

			//setting the accordionList back to the original data before
			//filtering
			const nextAccordionList = structuredClone(accordionStaticList);
			// biome-ignore lint/complexity/noForEach: <explanation>
			nextAccordionList.forEach((e) => {
				e.card.card.itemCards =
					e?.card?.card?.itemCards?.filter((f) => {
						return f?.card?.info?.itemAttribute?.vegClassifier === category;
					}) || [];
			});
			//setting the accordianList with filtered data
			setAccordionList(nextAccordionList);
		}
	};

	const handleFilter = (category) => {
		switch (category) {
			case "VEG":
				foodFilterLogic(category, 1);
				break;

			case "NONVEG":
				foodFilterLogic(category, 2);
				break;

			default:
				whichFilterBtn !== 0 && setwhichFilterBtn(0);
				setAccordionList(structuredClone(accordionStaticList));
				break;
		}
	};

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
						<div className="left-dot">
							<div className="__dot" />
							<div className="__bar" />
							<div className="__dot" />
						</div>
						<div className="right-delivery-info">
							<div>
								<span className="sp-text ">Outlet</span>{" "}
								{areaName
									.split(" ")
									.map(
										(e) =>
											e.charAt(0).toUpperCase() +
											e.slice(1).toLocaleLowerCase(),
									)
									.join(" ")}
							</div>
							<div>
								<span className="sp-text">
									{`${sla?.maxDeliveryTime}-${sla?.maxDeliveryTime}`} mins
								</span>
							</div>
						</div>
					</div>
					<hr />
					<div className="dt-rider">
						<i className="fi fi-rs-biking-mountain" />{" "}
						<span className="kms">{sla?.lastMileTravel} kms</span>{" "}
						{feeDetails?.totalFee &&
							`| ₹
						${feeDetails?.totalFee / 100} Delivery fee will apply`}
					</div>
				</div>
			</div>
			<div className="sticky-heads">
				<div className="menu-head">
					<i className="fi fi-rr-horizontal-rule" />
					<span>menu</span>
					<i className="fi fi-rr-horizontal-rule" />
				</div>
				<hr />
				{/* filter */}
				{veg === true ? (
					""
				) : (
					<div id="food-cat-classifier" className="filter-con">
						<button
							type="button"
							className={whichFilterBtn === 0 && "all-filter-btn"}
							onClick={() => {
								handleFilter("ALL");
							}}
						>
							ALL
						</button>
						<button
							type="button"
							className={whichFilterBtn === 1 && "veg-filter-btn"}
							onClick={() => {
								handleFilter("VEG");
							}}
						>
							Veg
						</button>
						<button
							type="button"
							className={whichFilterBtn === 2 && "nonveg-filter-btn"}
							onClick={() => {
								handleFilter("NONVEG");
							}}
						>
							Non-Veg
						</button>
					</div>
				)}
			</div>
			{accordionList.map((e, index) => {
				return e?.card?.card?.itemCards.length !== 0 ? (
					<AccordionMenu
						key={crypto.randomUUID()}
						accordionData={e?.card?.card}
						showAccordion={whichAccordion === index}
						setWhichAccordion={() => {
							setWhichAccordion(whichAccordion === index ? null : index);
						}}
					/>
				) : null;
			})}
		</div>
	);
}

export default RestaurantMenu;
