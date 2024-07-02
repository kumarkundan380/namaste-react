const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", {id:"parent"},
                [React.createElement("div", {id:"child1"},
                [React.createElement("h1", {}, "This is h1 Tag"),
                React.createElement("h2", {}, "This is h2 Tag")]),
                React.createElement("div", {id:"child2"},
                [React.createElement("h1", {}, "This is h1 Tag"),
                React.createElement("h2", {}, "This is h2 Tag")])]
);
root.render(parent);