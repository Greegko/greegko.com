import { Page } from "./page";

export interface Module {
  name: string;
  icon: string;
  url: string;
  pages?: Page[];
}
