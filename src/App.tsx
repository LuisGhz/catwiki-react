import "./App.scss";
import { MainCatTitle } from "./components/MainCatTitle";
import { SearchHeader } from "./components/SearchHeader";
import { WhyToHaveACat } from "./components/WhyToHaveACat";

function App() {
  return (
    <div className="app">
      <MainCatTitle />
      <SearchHeader />
      <WhyToHaveACat />
    </div>
  );
}

export default App;
