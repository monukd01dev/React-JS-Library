import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../../utils/cartSlice";
import { useState, useEffect } from "react";

const UserCart = () => {
	const {
		items: cartItems,
		discountedPrice,
		totalPrice,
	} = useSelector((store) => store.cart);
	const [deliveryRate, setDeliveryRate] = useState(0);
	const [grandTotal, setGrantTotal] = useState(0);
	const [totalGST, setTotalGST] = useState(0);
	const cartDispatcher = useDispatch();
	const platformFee = 6;
	const extraDiscount = 25;
	function handleClearCart() {
		cartDispatcher(clearCart());
	}
	useEffect(() => {
		function calcDelivery(itemCount) {
			switch (itemCount) {
				case 1:
					setDeliveryRate(35);
					break;
				case 2:
					setDeliveryRate(45);
					break;
				case 3:
				case 4:
					setDeliveryRate(60);
					break;
				default:
					setDeliveryRate(80);
			}
		}
		cartItems.length !== 0 && calcDelivery(cartItems.length);
	}, [cartItems.length]);

	useEffect(() => {
		function doStuff() {
			const totalSum =
				discountedPrice + deliveryRate + platformFee - extraDiscount;
			const totalTempGST = totalSum * (18 / 100);
			setTotalGST(totalTempGST);
			setGrantTotal(Number((totalSum + totalTempGST).toFixed(2)));
		}

		cartItems.length !== 0 && doStuff();
	}, [cartItems, discountedPrice, deliveryRate]);

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
									{totalPrice !== discountedPrice && (
										<span className="strikeOff">
											₹{totalPrice.toFixed(2).replace(/\.00$/, "")}
										</span>
									)}{" "}
									<span className="sp-green">
										₹{discountedPrice.toFixed(2).replace(/\.00$/, "")}
									</span>
								</span>
							</div>
							<div className="bill-row">
								<span className="left">Delivery Fee</span>
								<span className="right">₹{deliveryRate}</span>
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
									<span className="strikeOff">₹7.00</span> {platformFee}
								</span>
							</div>
							<div className="bill-row">
								<span className="left">GST and Restaurant Charges</span>
								<span className="right">
									₹{totalGST.toFixed(2).replace(/\.00$/, "")}
								</span>
							</div>
						</div>
						<div className="horizontal-line" />
						<div className="final-amount">
							<h3>TO PAY</h3>
							<span>₹{grandTotal}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default UserCart;
