import './App.css';
import { Searchbar } from "./components/Component1";
import { Carousel } from "./components/Component2";
import { Customdropdown } from "./components/Component3";

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Carousel />
      <Customdropdown />
    </div>
  );
}

export default App;