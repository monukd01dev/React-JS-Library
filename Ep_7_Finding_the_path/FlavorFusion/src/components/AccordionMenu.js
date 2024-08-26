import DishSlab from "./DishSlab";

const AccordionMenu = () => {
	return (
		<div className="accordion">
			<div className="acrdino-name">
				{" "}
				<h3>Recommended(20)</h3>{" "}
				<button
					type="button"
					className="chevronBtn"
					onClick={(e) => {
						e.target.classList.toggle("chevbtn");
						const baap = document.querySelector(".accordion");
						baap.classList.toggle("acrd-on");
					}}
				>
					<i class="fa-solid fa-chevron-up" />
				</button>
			</div>
			<DishSlab />
		</div>
	);
};

export default AccordionMenu;
