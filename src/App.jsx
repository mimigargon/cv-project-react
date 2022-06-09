import { useState } from "react";
import Hero from './components/Hero';
import Education from './components/Educations';
import Experience from "./components/Experience";
import About from "./components/About";
import More from "./components/More";
import { CV } from "./CV/CV";
import "./App.scss";

const { hero, education, experience, languages, habilities } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="app">
      <Hero hero={hero}/>
      <About hero={hero} />
      <More languages={languages} habilities={habilities} />
      <button className='custom-btn btn-4' onClick={() => setShowEducation(true)}>Education</button>
      <button className='custom-btn btn-4' onClick={() => setShowEducation(false)}>Experience</button>

      <div>
        {showEducation ? (
          <Education education={education}/>
        ) : (
          <Experience experience={experience}/>
        )}
      </div>

      
    </div>
  );
}

export default App;
