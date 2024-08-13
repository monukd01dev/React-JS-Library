import Search from "./Search";

import Filter from "./Filter";

const Main = () => {
	return (
		<div className="main">
			<div className="search-con">
				<Search />
			</div>
			<Filter />
		</div>
	);
};

export default Main;
