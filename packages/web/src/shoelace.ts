import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/checkbox/checkbox.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/themes/dark.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
import "solid-js";

declare module "solid-js" {
  namespace JSX {
    type Props<T> = { [K in keyof T as `prop:${string & K}`]?: T[K] };
    type ElementProps<T> = { [K in keyof T]: Props<T[K]> & JSX.HTMLAttributes<T[K]> };
    interface IntrinsicElements extends ElementProps<Omit<HTMLElementTagNameMap, keyof HTMLElementTags>> {}
  }
}

setBasePath("/shoelace");
