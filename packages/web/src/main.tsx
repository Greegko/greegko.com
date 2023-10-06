import { render } from "solid-js/web";

import { creditSystemModule } from "@greegko/credit-system";

import { App } from "./components/app";
import "./shoelace";
import "./tailwind.css";

const appNode = document.getElementById("root");

const modules = [creditSystemModule];

render(() => <App modules={modules} />, appNode!);
