import { Module } from "@greegko/core";

import { MainPage } from "./components/pages/main";

export const pluginSkeletonModule: Module = {
  name: "Plugin Skeleton",
  icon: "question-octagon",
  url: "plugin-skeleton",
  pages: [{ url: "/", component: MainPage }],
};
