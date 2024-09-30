import { useDispatch } from "react-redux";
import { DISH_SLAB_IMG_URL } from "../../utils/constants";
import { addItem, removeItem } from "../../utils/cartSlice";
const CartItem = ({ itemData }) => {
	const cartItemDispatcher = useDispatch();
	const { defaultPrice, price, finalPrice, name, isVeg, imageId, quantity } =
		itemData;

	function handleAddItem(item) {
		cartItemDispatcher(addItem(item));
	}
	function handleRemoveItem(item) {
		cartItemDispatcher(removeItem(item));
	}
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
							<button
								type="button"
								className="minus"
								onClick={() => handleRemoveItem(itemData)}
							>
								-
							</button>
							<div className="display">{quantity}</div>
							<button type="button" onClick={() => handleAddItem(itemData)}>
								+
							</button>
						</div>
					</div>
					<div className="item-price-con">
						{finalPrice && (
							<p className="price">
								₹{(quantity * (price || defaultPrice)) / 100}
							</p>
						)}
						<p className="selling-price">
							₹{quantity * ((finalPrice || defaultPrice || price) / 100)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CartItem;
