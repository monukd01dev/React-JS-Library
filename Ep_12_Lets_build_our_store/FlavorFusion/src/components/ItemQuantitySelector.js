import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/cartSlice";
import { useState } from "react";
const ItemQuantitySelector = ({ itemID }) => {
	const cartItems = useSelector((store) => store.cart.items);
	const item = cartItems.find((item) => item.id === itemID);
	const cartItemDispatcher = useDispatch();

	function handleAddItem() {
		item && cartItemDispatcher(addItem(item));
	}
	function handleRemoveItem() {
		item && cartItemDispatcher(removeItem(item));
	}

	return (
		<div className="item-count-con">
			<div className="item-counter">
				<button
					type="button"
					className="minus"
					onClick={() => handleRemoveItem()}
				>
					-
				</button>
				<div className="display">{item.quantity}</div>
				<button type="button" onClick={() => handleAddItem()}>
					+
				</button>
			</div>
		</div>
	);
};

export default ItemQuantitySelector;
