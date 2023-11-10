import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { routes } from "./routes/routes";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        {routes}
      </Router>
    </>
  );
};
