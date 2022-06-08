import { useState } from "react";
import { Hero, About, Education, Experience, More } from "./components";
import { CV } from "./CV/CV";
import "./App.scss";

const { hero, education, experience, languages, habilities } = CV;

function App() {
  return (
    <div className="app">
      <Hero hero={hero} />
      <About hero={hero} />
      <Education education={education} />
      <Experience experience={experience} />
      <More languages={languages} habilities={habilities} />
    </div>
  );
}

export default App;
