// // const root = document.getElementById("root");
// const root = document.createElement("div");
// const h1 = document.createElement("h1");
// h1.innerText = "Exception is everywhere null is object but it's primitive also";
// document.body.appendChild(root)
// root.appendChild(h1);
const heading = React.createElement("h1", {
    id: 'heading',
    
    style : {color : 'blue',backgroundColor : 'red'},
},"This from js file react code");

// const mydiv = React.createElement('div',{ style : {border: '1px solid red',}},['here is my text',heading])


const root = ReactDOM.createRoot(document.getElementById("inblock"));
root.render(heading )
console.log(heading, root);