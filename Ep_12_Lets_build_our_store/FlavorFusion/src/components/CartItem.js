import { DISH_SLAB_IMG_URL } from "../../utils/constants";

const CartItem = ({ itemData }) => {
	const { defaultPrice, price, finalPrice, name, isVeg, imageId } = itemData;
	console.log("ItemData : ", itemData);
	return (
		<div className="cartItem-con">
			<div className="cartItem">
				<div
					className="item-img-con"
					style={{ backgroundImage: `url('${DISH_SLAB_IMG_URL}${imageId}')` }}
				/>
				{/* data */}
				<div className="item-data-con">
					<div className="restro-details-con">
						<div className="item-name">
							{isVeg ? (
								<div className="veg-classifier-con">
									<div className="outer-square">
										<div className="inner-circle" />
									</div>
								</div>
							) : (
								<div className="veg-classifier-con">
									<div className="outer-square red">
										<div className="inner-circle red" />
									</div>
								</div>
							)}

							<h4>{name}</h4>
						</div>
						{/* <div className="restro-name">
							<p>Chinese Wok</p>
						</div> */}
					</div>
					<div className="item-count-con">
						<div className="item-counter">
							<button type="button">-</button>
							<div className="display">0</div>
							<button type="button">+</button>
						</div>
					</div>
					<div className="item-price-con">
						{price && <p className="price">₹{price / 100}</p>}
						<p className="selling-price">
							₹{finalPrice / 100 || defaultPrice / 100}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CartItem;
