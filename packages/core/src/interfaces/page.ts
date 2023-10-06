import { Component } from "solid-js";

import { Tab } from "./tab";

export interface Page {
  url: string;
  component: Component;
  tabs?: Tab[];
}
