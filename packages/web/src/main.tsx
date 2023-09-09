import { render } from "solid-js/web";

import { App } from "./components/app";
import "./shoelace";
import "./tailwind.css";

const appNode = document.getElementById("root");

render(() => <App />, appNode!);
