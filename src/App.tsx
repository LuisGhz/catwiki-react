import "./App.scss";
import { Footer } from "./components/Footer";
import { MainCatTitle } from "./components/MainCatTitle";
import { SearchHeader } from "./components/SearchHeader";
import { WhyToHaveACat } from "./components/WhyToHaveACat";

function App() {
  return (
    <div className="app">
      <MainCatTitle />
      <SearchHeader />
      <WhyToHaveACat />
      <Footer />
    </div>
  );
}

export default App;
