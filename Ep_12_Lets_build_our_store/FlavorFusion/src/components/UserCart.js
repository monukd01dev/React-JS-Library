import { useDispatch, useSelector } from "react-redux";
import DishSlab from "./DishSlab";
import { clearCart } from "../../utils/cartSlice";

const UserCart = () => {
	const cartItems = useSelector((store) => store.cart.items);

	const cartDispatcher = useDispatch();

	function handleClearCart() {
		cartDispatcher(clearCart());
	}
	console.log(cartItems);

	return (
		<div className="user-cart-con">
			<h1
				style={{
					textAlign: "center",
					fontSize: "1.5rem",
					marginBottom: "1rem",
				}}
			>
				User Cart
			</h1>
			<div
				className="cart-items"
				style={{
					maxWidth: "900px",
					Width: "90%",
					margin: "auto",
					height: "600px",
					overflow: "auto",
				}}
			>
				{cartItems.length !== 0
					? cartItems.map((item) => (
							<DishSlab key={item.id} dishSlabData={item} />
						))
					: "Your Cart is Empty"}
			</div>

			<button type="button" onClick={handleClearCart}>
				clear Cart
			</button>
		</div>
	);
};
export default UserCart;
