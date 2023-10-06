import { A } from "@solidjs/router";
import { For } from "solid-js";

import { Tab } from "@greegko/core";

export const Nav = (props: { modulePath: string; tabs: Tab[] }) => {
  return (
    <div class="fixed bottom-0 left-0 z-50 w-full h-20 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div class="flex h-full justify-between max-w-md mx-auto font-medium">
        <For each={props.tabs}>
          {tab => (
            <A
              href={[props.modulePath, tab.url].join("/")}
              class="text-sm flex-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              <sl-icon prop:name={tab.icon} class="text-2xl mb-2"></sl-icon>
              <div>{tab.label}</div>
            </A>
          )}
        </For>
      </div>
    </div>
  );
};
