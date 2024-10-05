import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import { useState, useEffect } from "react";

const useUserCart = (cartItems, discountedPrice) => {
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
	return {
		deliveryRate,
		grandTotal,
		totalGST,
		platformFee,
		extraDiscount,
		handleClearCart,
	};
};

export default useUserCart;
