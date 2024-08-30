import { useEffect } from "react";
import DishSlab from "./DishSlab";

const AccordionMenu = ({ accordionData }) => {
	const { title, itemCards } = accordionData;

	//on the first accordion on the first render only remove the empty array from the dependency to run on every re-render
	// useEffect(() => {
	// document.querySelector(".accordion").classList.toggle("acrd-on");

	// }, []);

	return (
		<div className="accordion acrd-on">
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
						// const baap = document.querySelector(".accordion");//this is commented cause it's globally selecting the .accordion element and querrySelector gives the first match that's why closing effect only working for 1st accordion

						// and this one is traversing with the help of target{chevbtn} so it's work for specific one
						const baap = e.target.parentElement.parentElement.parentElement;
						baap.classList.toggle("acrd-on");
					}}
				>
					<i className="fa-solid fa-chevron-up" />
				</button>
			</div>
			{itemCards.map((e) => {
				return <DishSlab key={e.card.info.id} dishSlabData={e.card.info} />;
			})}
		</div>
	);
};

export default AccordionMenu;
