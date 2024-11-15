const div = React.createElement("div", {id:'first'}, 
    React.createElement("div", {id:"second"}, 
        [
            React.createElement("h1", {}, "Hello world heading1"),
            React.createElement("h2", {}, "hello world heading2")
        ]
    )
)


// const heading = React.createElement("h1", {}, "Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading, root)
root.render(div);