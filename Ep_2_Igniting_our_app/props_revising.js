// I am came from ep_4 and revising the props here so if you are on ep_2 please ignore that script...

// imports
import ReactDOM from "react-dom/client";
import { products as productList } from "./data/propsRevisionData.json";

// checks
// console.log(products);
// console.log("Ram Ram Bhai");

// defining connectin with html
const root = ReactDOM.createRoot(document.getElementById("root"));

const styles = {
  fontFamily: "Arial",
  width: "400px",
  margin: " 20px auto",
  padding: "20px",
  backgroundColor: "#f0f0f0",
};

// my functional component
// const MyComponent = (props) => {
//   //   here we know that our products array is wrapped as property inside the props object so we will do the destructuring we can do it on the way but we will do it below

//   const {products} = props;
//   {
//     console.log(products);
//   }

//   return (
//     <div className="mydiv" style={styles}>
//       <h1>MyFunctionalComponent</h1>
//     </div>
//   );
// };
const MyComponent = ({ name, price, features, rating }) => {
  //   const { productList } = props;
  {
    console.log(name, price, rating, features);
  }

  return (
    <div className="mydiv" style={styles}>
      <h3>Name : {name}</h3>
      <h3>Price : {price}</h3>
      <h3>Features : {features.join(", ")}</h3>
      <h3>Ratings : {rating}</h3>
    </div>
  );
};

// case:1
root.render(<MyComponent productList />); //treaded as boolean

// case:2 passing the arguments one by one
root.render(<MyComponent productList="theek hai bhai" poperty="value" />);

//case:3 sensiible works ab JS ka variable to {isme he jaega na, jsx me javascript aise he use hoti ai {}baces ke andar}
root.render(<MyComponent productList={productList} />); //good
// root.render(<MyComponent productList={...productList} />);//error  read below
root.render(<MyComponent {...productList} />); // if we spread we have to spread into the props directly no propertyName have to give//usage depends

root.render(<MyComponent productList={productList} />); //good

//above i am sending the whole product list but i have pass the single prduct into the component
// let's do that

root.render(
  productList.map((product) => <MyComponent key={product.id} {...product} />)
);
