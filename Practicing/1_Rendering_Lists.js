import ReactDOM from "react-dom/client";
import { Fragment } from "react";

//connectioon
const root = ReactDOM.createRoot(document.getElementById("root"));

// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

// const peopleList = (
//   <ul>
//     {people.map((e) => (
//       <li>{e}</li>
//     ))}
//   </ul>
// );

const people = [
	{
		id: 0, // Used in JSX as a key
		name: "Creola Katherine Johnson",
		profession: "mathematician",
		accomplishment: "spaceflight calculations",
		imageId: "MK3eW3A",
	},
	{
		id: 1, // Used in JSX as a key
		name: "Mario José Molina-Pasquel Henríquez",
		profession: "chemist",
		accomplishment: "discovery of Arctic ozone hole",
		imageId: "mynHUSa",
	},
	{
		id: 2, // Used in JSX as a key
		name: "Mohammad Abdus Salam",
		profession: "physicist",
		accomplishment: "electromagnetism theory",
		imageId: "bE7W1ji",
	},
	{
		id: 3, // Used in JSX as a key
		name: "Percy Lavon Julian",
		profession: "chemist",
		accomplishment:
			"pioneering cortisone drugs, steroids and birth control pills",
		imageId: "IOjWm71",
	},
	{
		id: 4, // Used in JSX as a key
		name: "Subrahmanyan Chandrasekhar",
		profession: "astrophysicist",
		accomplishment: "white dwarf star mass calculations",
		imageId: "lrWQx8l",
	},
];

const ListItems = ({ people: { id, name, profession } }) => {
	return (
		<div className="list-items">
			<h3>ID : {id}</h3>
			<h3>Name : {name}</h3>
			<h3>Profession : {profession}</h3>
		</div>
	);
};

const chemists = people
	.filter((e) => e.profession === "chemist")
	.map((e) => <ListItems key={e.id} people={e} />);

const anyOther = people
	.filter((e) => e.profession !== "chemist")
	.map((e) => <ListItems key={e.id} people={e} />);

const List = ({ list_items }) => {
	return <div className="list-container">{list_items}</div>;
};

const listItems = people.map((person) => (
	<Fragment key={person.id}>
		<h2>{person.name}</h2>
		<p>{person?.accomplishment}</p>
	</Fragment>
));

root.render([
	<List key={12} list_items={chemists} />,
	<List key={13} list_items={anyOther} />,
	<List key={14} list_items={listItems} />,
]);
