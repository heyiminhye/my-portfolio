import "./App.scss";

import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Dots from "./components/Dots";

function App() {
  return (
    <div className="App">
      {/* <Dots /> */}
      <Home />
      <Introduce />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
