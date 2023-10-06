import { Outlet, Route, Router, Routes } from "@solidjs/router";
import { For, Show, createEffect, createSignal } from "solid-js";

import { Module, Page, Tab } from "@greegko/core";

import { Nav } from "./nav";
import { PluginSelector } from "./plugin-selector";

const [activeRoute, setActiveRoute] = createSignal<[Module, Page] | null>(null);

export const App = (props: { modules: Module[] }) => {
  const [tabs, setTabs] = createSignal<Tab[] | null>(null);
  const modulePath = () => activeRoute()?.[0].url || "";
  const modules = props.modules;

  createEffect(() => {
    const route = activeRoute();

    setTabs(route ? route[1].tabs || null : null);
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Show when={tabs()}>
                <Nav modulePath={modulePath()} tabs={tabs()!} />
              </Show>
              <PageWrapper />
            </>
          }
        >
          <Route path="/" element={(setActiveRoute(null), (<PluginSelector modules={props.modules} />))}></Route>
          <For each={modules}>
            {module => (
              <Route path={module.url}>
                <For each={module.pages}>
                  {page => (
                    <Route
                      path={page.url}
                      element={(setActiveRoute([module, page]), (<page.component></page.component>))}
                    ></Route>
                  )}
                </For>
              </Route>
            )}
          </For>
        </Route>
      </Routes>
    </Router>
  );
};

export const PageWrapper = () => {
  return (
    <div class="p-4 sl-theme-dark">
      <Outlet />
    </div>
  );
};
