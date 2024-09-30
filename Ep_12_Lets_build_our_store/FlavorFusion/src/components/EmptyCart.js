import emptyCart from "../assets/emptyCart.gif";
import sadEmoji from "../assets/sadEmoji.gif";
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
	const navigate = useNavigate();
	const handleClick = () => navigate("/");
	return (
		<div className="empty-cart-con">
			<div className="heading">
				<h1>Your Cart is Empty</h1>
				<img src={sadEmoji} alt="" />
			</div>
			<div className="img-con">
				{/* <img src="https://i.ibb.co/nk3nF16/Add-to-Cart-amico.png" alt="" /> */}
				<img src={emptyCart} alt="" />
			</div>
			<div className="btn-con">
				<button type="button" onClick={handleClick}>
					{" "}
					See Restaurants Near You
				</button>
			</div>
		</div>
	);
};

export default EmptyCart;
