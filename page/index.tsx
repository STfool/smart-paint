import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./app";

const root = document.createElement("div");
ReactDom.render(<App></App>, root);

if (import.meta) {
}
