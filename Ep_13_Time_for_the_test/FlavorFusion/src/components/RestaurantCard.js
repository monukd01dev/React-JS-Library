import { CLOUDINARY_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
	const {
		name,
		cloudinaryImageId,
		costForTwo,
		cuisines,
		avgRating,
		sla: { deliveryTime },
	} = props;

	const styleForImg = {
		backgroundImage: `url('${CLOUDINARY_URL + cloudinaryImageId}')`,
	};

	return (
		<div className="restaurant-card" data-testid="restaurantCard">
			<div className="__card-img" style={styleForImg} />
			<h3 className="__name">{name}</h3>
			<p className="__cuisines">{cuisines.join(", ")}</p>
			<div className="__details">
				<div className="__ratings">
					<i className="fa-solid fa-star" />
					<span className="__text">{avgRating}</span>
				</div>

				<i className="fa-solid fa-circle __dot" />

				<div className="__timing">{deliveryTime} MIN</div>

				<i className="fa-solid fa-circle __dot" />

				<div className="__offer">{costForTwo}</div>
			</div>
			<hr />
			<div className="__discounts">
				<div>
					<span>
						<i className="fi fi-sr-badge-percent" />
					</span>
					FREE DELIVERY
				</div>
			</div>
		</div>
	);
};

// ! HIGER ORDER COMPONENT
export const promoteRestroCard = (RestaurantCard) => {
	return (props) => {
		return (
			<div className="promoted-card-con">
				<div className="p-label">Promoted</div>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
