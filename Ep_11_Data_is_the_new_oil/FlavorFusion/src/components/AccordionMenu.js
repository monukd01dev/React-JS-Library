import { useEffect ,useState} from "react";
import DishSlab from "./DishSlab";

const AccordionMenu = ({ accordionData,index,whichAccordion,setWhichAccordion }) => {
	
	const { title, itemCards } = accordionData;
	const handleClick =()=> setWhichAccordion((whichAccordion === index) ? -1 : index);

	return (
		<div className="accordion acrd-on">
			<div className="acrdino-name">
				{" "}
				<h3>
					{title}({itemCards.length})
				</h3>{" "}
				<button
					type="button"
					className={`chevronBtn ${(whichAccordion === index) ? 'chevbtn' : ''}`}
					onClick={handleClick}
				>
					<i className="fa-solid fa-chevron-up" />
				</button>
			</div>
			{(whichAccordion === index) ? itemCards.map((e) => {
				return <DishSlab key={e.card.info.id} dishSlabData={e.card.info} />;
			}): ""}
		</div>
	);
};

export default AccordionMenu;
