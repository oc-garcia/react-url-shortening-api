import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ShortlyBar from "./Components/ShortlyBar";
import Statistics from "./Components/Statistics";

import './Styles/style.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShortlyBar />
      <Statistics />
    </>
  );
}

export default App;
