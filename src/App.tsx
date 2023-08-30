import "./App.scss";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
import { MainCatTitle } from "./components/MainCatTitle";

function App() {
  return (
    <div className="app">
      <MainCatTitle />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
