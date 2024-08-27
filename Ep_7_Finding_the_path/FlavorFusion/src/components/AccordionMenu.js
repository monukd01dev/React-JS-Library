import DishSlab from "./DishSlab";

const AccordionMenu = ({ accordionData }) => {
	const { title, itemCards } = accordionData;

	console.log(Array.isArray(itemCards));
	return (
		<div className="accordion">
			<div className="acrdino-name">
				{" "}
				<h3>
					{title}({itemCards.length})
				</h3>{" "}
				<button
					type="button"
					className="chevronBtn"
					onClick={(e) => {
						e.target.classList.toggle("chevbtn");
						// const baap = document.querySelector(".accordion");
						const baap = e.target.parentElement.parentElement.parentElement;
						baap.classList.toggle("acrd-on");
					}}
				>
					<i class="fa-solid fa-chevron-up" />
				</button>
			</div>
			{itemCards.map((e) => {
				return <DishSlab key={e.card.info.id} dishSlabData={e.card.info} />;
			})}
		</div>
	);
};

export default AccordionMenu;
