import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../../utils/cartSlice";

const UserCart = () => {
	const cartItems = useSelector((store) => store.cart.items);

	const cartDispatcher = useDispatch();

	function handleClearCart() {
		cartDispatcher(clearCart());
	}
	console.log("cartItems : ", cartItems);

	return (
		<div className="user-cart-con">
			{/* Cart */}
			<div className="cart-con">
				<div className="cart">
					<div className="cart-header">
						<h1>Cart</h1>
						<button type="button" className="clear" onClick={handleClearCart}>
							{" "}
							Clear{" "}
						</button>
					</div>
					<div className="horizontal-line" />
					<div className="cart-items-con">
						{cartItems?.length > 0 ? (
							<>
								{cartItems.map((item) => (
									<CartItem key={item?.id} itemData={item} />
								))}
							</>
						) : (
							<h2>Your Cart Is Empty</h2>
						)}
					</div>
				</div>
			</div>
			{/* summary */}
			<div className="summary-con">
				<div className="cart-summary">
					<div className="summary-header">
						<h2>Summary</h2>
					</div>
					<div className="horizontal-line" />
					<div className="sub-head-bill">
						<h3>Bill Details</h3>
						<div className="bill-details-con">
							<div className="bill-row">
								<span className="left">Item Total</span>
								<span className="right">
									<span className="strikeOff">₹1394</span> 796
								</span>
							</div>
							<div className="bill-row">
								<span className="left">Delivery Fee</span>
								<span className="right">₹38</span>
							</div>
							<div className="bill-row">
								<span className="left">Extra Discount for you</span>
								<span className="right">-₹25</span>
							</div>
						</div>

						<div className="horizontal-line-light" />
						<div className="bill-details-con">
							<div className="bill-row">
								<span className="left">Platform Fee</span>
								<span className="right">
									<span className="strikeOff">₹7.00</span> 6
								</span>
							</div>
							<div className="bill-row">
								<span className="left">GST and Restaurant Charges</span>
								<span className="right">-₹70.88</span>
							</div>
						</div>
						<div className="horizontal-line" />
						<div className="final-amount">
							<h3>TO PAY</h3>
							<span>₹886</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default UserCart;
