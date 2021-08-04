import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);

if (module.hot) {
    module.hot.accept("./app", () => {
        import("./app").then((res) => {
            const App = res.default;
            ReactDOM.render(<App />, root);
        });
    });
}
