import "./App.css";
import Description from "./Components/description/Description";
import Feature from "./Components/features/Feature";
import Homepage from "./Components/home/Homepage";
import Slides from "./Components/Slides";
// import Homepage from "./Components/Slides";

function App() {
  return (
    <div className="max-w-[1750px]">
      <Homepage />
      <Slides />
      <Description />
      <Feature />
    </div>
  );
}

export default App;
