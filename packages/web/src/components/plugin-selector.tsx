import { A } from "@solidjs/router";
import { For } from "solid-js";

import { Module } from "@greegko/core";

export const PluginSelector = (props: { modules: Module[] }) => {
  return (
    <>
      <For each={props.modules}>
        {module => (
          <A
            class="p-4 inline-block text-center rounded-lg border-2  border-slate-200 hover:bg-slate-600 hover:text-gray-100"
            href={module.url}
          >
            <div class="text-5xl">
              <sl-icon prop:name={module.icon}></sl-icon>
            </div>
            {module.name}
          </A>
        )}
      </For>
    </>
  );
};
