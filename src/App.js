import React from "react";
import Headers from "./components/Headers/Headers";
import About from "./components/About/About";
import Qualification from "./components/Qulification/Qualification";
import Skill from "./components/Skill/Skill";

const App = () => {
  return (
    <div>
      <Headers/>
      <About /><hr />
      <Qualification /><hr />
      <Skill />
    </div>
  );
};

export default App;
