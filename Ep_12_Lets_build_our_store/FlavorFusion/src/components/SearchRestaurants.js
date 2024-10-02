const SearchRestaurants = ({
	searchKey,
	setSearchKey,
	resConstList,
	setResList,
}) => (
	<div className="search">
		<input
			type="text"
			placeholder="What are you craving today?"
			value={searchKey}
			onChange={(e) => {
				setSearchKey(e.target.value.trim().toLocaleLowerCase());
			}}
		/>

		<button
			type="button"
			className="search-btn"
			onClick={() => {
				const nextResList = resConstList.filter(({ info }) =>
					info.name.toLowerCase().includes(searchKey),
				);

				setResList(nextResList);
			}}
		>
			<i className="fa-solid fa-magnifying-glass" />
		</button>
	</div>
);

export default SearchRestaurants;
