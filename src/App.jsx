import "./App.css";
import Description from "./Components/description/Description";
import Feature from "./Components/features/Feature";
import Homepage from "./Components/home/Homepage";
import Slides from "./Components/Slides";
// import Homepage from "./Components/Slides";

function App() {
  return (
    <>
      <Homepage />
      <Slides />
      <Description />
      <Feature />
    </>
  );
}

export default App;
