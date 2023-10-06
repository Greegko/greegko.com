import { Module } from "@greegko/core";

import { HistoryPage } from "./components/pages/history";
import { QuestsPage } from "./components/pages/quests/quests";

const SharedTabs = [
  { label: "Home", icon: "house", url: "/" },
  { label: "History", icon: "gear", url: "/history" },
];

export const creditSystemModule: Module = {
  url: "credit-system",
  pages: [
    { url: "/", tabs: SharedTabs, component: QuestsPage },
    { url: "/history", tabs: SharedTabs, component: HistoryPage },
  ],
};
