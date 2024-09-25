import { Link } from "react-router-dom";
import { FF_LOGO } from "../../utils/constants";
import UserContext from "../../utils/UserContext";
import { useContext } from "react";
const Header = () => {
	const { userName } = useContext(UserContext);
	return (
		<div className="header">
			<div className="logo">
				<img src={FF_LOGO} alt="flavor fusion logo" />
			</div>
			<div className="nav-items">
				<Link to="/">Home</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/about">About</Link>
				<div>{userName}</div>
				<Link to="/cart">
					<i className="fa-solid fa-cart-shopping" />
				</Link>
			</div>
		</div>
	);
};
export default Header;
