import { DISH_SLAB_IMG_URL } from "../../utils/constants";

const DishSlab = ({ dishSlabData }) => {
	const {
		ribbon,
		name,
		description,
		defaultPrice,
		price,
		finalPrice,
		offerTags,
		ratings,
		itemAttribute,
		imageId,
	} = dishSlabData;

	return (
		<div className="dish-slab-con">
			<div className="slab">
				<div className="left">
					<div className="content">
						<div className="dish-cat">
							{itemAttribute?.vegClassifier === "NONVEG" ? (
								<i className="fa-solid fa-square-caret-up __non-veg" />
							) : (
								<i className="fa-solid fa-square-caret-up __veg" />
							)}
							{ribbon && <span className="ribbon">{ribbon?.text}</span>}
						</div>
						<div className="dish-name">{name}</div>
						<div className="dish-price">
							{finalPrice ? (
								<>
									<span className="strike-price">
										₹{(defaultPrice || price) / 100}
									</span>{" "}
									₹{finalPrice / 100}
								</>
							) : (
								<>₹ {(defaultPrice || price) / 100}</>
							)}
							{offerTags?.[0].title && (
								<>
									{" "}
									<i className="fa-solid fa-tag" />
									<span className="offer-title">{offerTags[0]?.title}</span>{" "}
									<span className="offer-subtitle">
										{offerTags[0]?.subTitle}
									</span>
								</>
							)}
						</div>
						<div className="dish-rating">
							{ratings?.aggregatedRating?.rating && (
								<>
									<i className="fa-solid fa-star star" />
									<span className="rating">
										{" "}
										{ratings?.aggregatedRating?.rating}
									</span>
									<span className="rating-count">
										({ratings?.aggregatedRating?.ratingCountV2})
									</span>
								</>
							)}
						</div>
						<div className="dish-description">
							{description
								? description.length > 144
									? description.slice(0, 143).concat("...more")
									: description
								: description}
						</div>
					</div>
				</div>
				<div className="right">
					<div className="img-con">
						{imageId ? (
							<img src={`${DISH_SLAB_IMG_URL}${imageId}`} alt="" />
						) : (
							<div className="empty-saver" />
						)}
						<button type="button" className="img-con-btn">
							add
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DishSlab;
