import { Outlet, Route, Router, Routes } from "@solidjs/router";

import { Nav } from "./nav";
import { HistoryPage } from "./pages/history";
import { QuestsPage } from "./pages/quests/quests";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <PageWrapper />
            </>
          }
        >
          <Route path="/" component={QuestsPage} />
          <Route path="/history" component={HistoryPage} />
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
