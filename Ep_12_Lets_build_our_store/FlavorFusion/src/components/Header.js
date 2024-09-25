import { Link } from "react-router-dom";
import { FF_LOGO } from "../../utils/constants";

const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				<img src={FF_LOGO} alt="flavor fusion logo" />
			</div>
			<div className="nav-items">
				<Link to="/">Home</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/about">About</Link>
				<Link to="/cart">
					<i className="fa-solid fa-cart-shopping" />
				</Link>
			</div>
		</div>
	);
};
export default Header;
