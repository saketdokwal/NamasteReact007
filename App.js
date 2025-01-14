const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "znn" },
//   "Hello World From React!"
// );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
