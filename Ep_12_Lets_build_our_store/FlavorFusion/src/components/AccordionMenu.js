import { useEffect, useState } from "react";
import DishSlab from "./DishSlab";

const AccordionMenu = ({ accordionData, showAccordion, setWhichAccordion }) => {
	const { title, itemCards } = accordionData;

	return (
		<div className="accordion">
			<div className="acrdino-name">
				{" "}
				<h3>
					{title}({itemCards.length})
				</h3>{" "}
				<button
					type="button"
					className={`chevronBtn ${showAccordion && "chevbtn"}`}
					onClick={() => {
						setWhichAccordion();
					}}
				>
					<i className="fa-solid fa-chevron-up" />
				</button>
			</div>
			{showAccordion &&
				itemCards.map((e) => {
					return <DishSlab key={e.card.info.id} dishSlabData={e.card.info} />;
				})}
		</div>
	);
};

export default AccordionMenu;
