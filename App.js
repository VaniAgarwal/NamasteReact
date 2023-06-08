// const heading = React.createElement("h1",{
//     abc:"vani",xyz:"Gupta"
// },"Hello World form React");

// console.log(heading);


const parent = React.createElement("div",{
    id:"parent"
}, 
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am Children"),React.createElement("h2",{},"I am child2")]
)
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);