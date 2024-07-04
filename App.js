import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"Namaste React")
console.log(heading);

// JSX
const element = <span>React Element</span>
// JSX
const jsxHeading = (
    <h1 className="head" tabIndex="5">
        {element} 
        Namaste React using JSX
        {/* <HeadingComponent /> */}
    </h1>
)

const Title = () => (
    <h1>This is Title Component</h1>
)

const HeadingComponent = () => (
    <div id="container">
        {jsxHeading}
        <Title />
        {Title()}
        <h1>This is Heading Componnt</h1>
    </div>
)



const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);
root.render(<HeadingComponent />)