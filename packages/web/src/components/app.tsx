import { Outlet, Route, Router, Routes } from "@solidjs/router";
import { Component, For, Show, createEffect, createSignal } from "solid-js";

import { Module, Page, Tab } from "@greegko/core";

import { Nav } from "./nav";

const [activeRoute, setActiveRoute] = createSignal<[Module, Page] | null>(null);

export const App = (props: { modules: Module[] }) => {
  const [tabs, setTabs] = createSignal<Tab[] | null>(null);
  const modulePath = () => activeRoute()?.[0].url || "";
  const modules = props.modules;

  createEffect(() => {
    const route = activeRoute();

    if (!route) return;

    setTabs(route[1].tabs || null);
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
          <For each={modules}>
            {module => (
              <Route path={module.url}>
                <For each={module.pages}>
                  {page => <Route path={page.url} component={setPageWrapper(module, page)}></Route>}
                </For>
              </Route>
            )}
          </For>
        </Route>
      </Routes>
    </Router>
  );
};

const setPageWrapper = (m: Module, p: Page): Component => {
  return () => {
    setActiveRoute([m, p]);
    return p.component({});
  };
};

export const PageWrapper = () => {
  return (
    <div class="p-4 sl-theme-dark">
      <Outlet />
    </div>
  );
};
