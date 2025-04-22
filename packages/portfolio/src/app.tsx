import data from "./data.json";
import { MainPage } from "./pages/main";

export const App = () => {
  return <MainPage data={data} />;
};
