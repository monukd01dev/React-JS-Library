import { Link } from "react-router-dom";
import { FF_LOGO } from "../../utils/constants";
import { useSelector } from "react-redux";
import FFL from "../assets/FFL.png";

const Header = () => {
	const cartItems = useSelector((store) => store.cart.items);

	return (
		<div className="header">
			<div className="logo">
				<img src={FFL} alt="flavor fusion logo" />
			</div>
			<div className="nav-items">
				<Link to="/">Home</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/about">About</Link>
				<Link to="/cart">
					<div className="cart-icon-head">
						<i className="fa-solid fa-cart-shopping" />
						{cartItems.length !== 0 && (
							<div className="cart-items">{cartItems.length}</div>
						)}
					</div>
				</Link>
			</div>
		</div>
	);
};
export default Header;
