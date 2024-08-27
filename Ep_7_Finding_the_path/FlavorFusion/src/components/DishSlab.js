import { DISH_SLAB_IMG_URL } from "../../utils/constants";

const DishSlab = ({ dishSlabData }) => {
	const {
		name,
		description,
		defaultPrice,
		price,
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
						</div>
						<div className="dish-name">{name}</div>
						<div className="dish-price">₹ {(defaultPrice || price) / 100}</div>
						<div className="dish-rating">
							{ratings?.aggregatedRating?.rating ? (
								<>
									<i className="fa-solid fa-star star" />
									<span className="rating">
										{" "}
										{ratings?.aggregatedRating?.rating}{" "}
									</span>
									({ratings?.aggregatedRating?.ratingCountV2})
								</>
							) : (
								""
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
						<img src={`${DISH_SLAB_IMG_URL}${imageId}`} alt="" />
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
