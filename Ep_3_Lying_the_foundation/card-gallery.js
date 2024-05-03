import ReactDOM from "react-dom/client";
import user from "./EmployeeMocData.json";
console.log(Array.isArray(user));
const rawData = user[0];

const ROOT = ReactDOM.createRoot(document.getElementById("root"));

const getRandomUserImage = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const pictureUrl = data.results[0].picture.large; // Access image URL from JSON
  return pictureUrl;
};

const Card = (data) => (
  <div className="card">
    <div className="upper-content">
      <div className="image-con">
        <img src="https://source.unsplash.com/random/?face" />
      </div>
      <div className="u-detail">
        <p>{`${data.first_name} ${data.last_name}`}</p>
        <p>{data.data.department}</p>
        <p>{data.email}</p>
      </div>
    </div>
    <div className="about">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
      consectetur eaque.
    </div>
  </div>
);

// const cardArr = user.map((data) => <Card {...data} />);
const cardArr = user.map((data) => <Card data={data} />); // if we put data directly it will be treated as boolen so that how we have to deal with it now it will stored inside props(object) as an object
// console.log(<Card rawData={rawData} />);

ROOT.render(cardArr);
