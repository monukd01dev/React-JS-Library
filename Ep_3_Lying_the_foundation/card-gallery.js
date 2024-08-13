import ReactDOM from "react-dom/client";
import user from "./EmployeeMocData.json";
// console.log(Array.isArray(user));

const ROOT = ReactDOM.createRoot(document.getElementById("root"));

const getRandomUserImage = async () => {
	const response = await fetch("https://randomuser.me/api/");
	const data = await response.json();
	const pictureUrl = data.results[0].picture.large; // Access image URL from JSON
	return pictureUrl;
};

// console.log( await getRandomUserImage())

// const Card = (data) => (
//   <div className="card">
//     <div className="upper-content">
//       <div className="image-con">
//         <img src={data.data.picture} />
//       </div>
//       <div className="u-detail">
//         <p>{`${data.data.first_name} ${data.data.last_name}`}</p>
//         <p>{data.data.department}</p>
//         <p>{data.data.email}</p>
//       </div>
//     </div>
//     <div className="about">{data.data.about}</div>
//   </div>
// );

const Card = (
	data, //ye props hai jo ab data ke naam se jana jaega
	//here props are named as data isliye props me sara data_hai fir bhi hum data.first_name ka use kar rahe hai
) => (
	<div className="card">
		<div className="upper-content">
			<div className="image-con">
				<img src={data.picture} alt="user-img" />
			</div>
			<div className="u-detail">
				<p>{`${data.first_name} ${data.last_name}`}</p>
				<p>{data.department}</p>
				<p>{data.email}</p>
			</div>
		</div>
		<div className="about">{data.about}</div>
	</div>
);

// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
const cardArr = user.map((data) => <Card {...data} />); //what if Idn't spread the data just pass it
// const cardArr = user.map((data) => <Card {data} />); //I got build error by parcel
// console.log(cardArr[0].props);
// const cardArr = user.map((data) => <Card data={data} />); // if we put data directly it will be treated as boolen so that how we have to deal with it now it will stored inside props(object) as an object
// console.log(<Card rawData={rawData} />);

ROOT.render(cardArr);

// const cardArr = user.map((data) => <Card {...data} />) // properties directly spread intot he props that we wanted to use them
// const cardArr = user.map((data) => <Card data={data} />); //props.data.property // ye wala case hai jisme data me data mtlb data.data.property name props.data.property kyon nhi kyonki line no 35 pad parameter fo card function
// const cardArr = user.map((data) => <Card data />) // treaded as boolean
