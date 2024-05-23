import React from "react"; //we write jsx which is converted to react by bable and bable uses react package so we can completely remove this import cause we only use ReactDOM to define Connection.
import ReactDOM from "react-dom/client";

//creating connection
const Root = ReactDOM.createRoot(document.getElementById("root"));

console.log(Root); //object

//function component level-1

function Heading() {
  return <h1>Level One</h1>;
}

Root.render(<Heading />);

//level-2
const Heading_2 = () => {
  return (
    <div className="Jacks" style={{ backgroundColor: "red", color: "white" }}>
      {Heading()}
      level 2
    </div>
  );
};

Root.render(<Heading_2 />);

// level-3

const Heading_3 = () => (
  <div>
    <div className="Jacks" style={{ backgroundColor: "red", color: "white" }}>
      {Heading()}
      {Heading_2()}
      level 2
    </div>
  </div>
);
const ans = Heading_3();
console.log(ans);
Root.render(<Heading_3 />);
