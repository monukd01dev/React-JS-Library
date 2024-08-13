import { FF_LOGO } from "../../utils/constants";

const Header = () => (
	<div className="header">
		<div className="logo">
			<img src={FF_LOGO} alt="flavor fusion logo" />
		</div>
		<div className="nav-items">
			<a href="#home">Home</a>
			<a href="#home">Contact</a>
			<a href="#home">About</a>
			<a href="#home">
				<i className="fa-solid fa-cart-shopping" />
			</a>
		</div>
	</div>
);
export default Header;
