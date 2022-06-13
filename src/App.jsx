import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Hero from "./components/Hero";
import Education from "./components/Educations";
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
      <Link to="/hero">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About me</button>
      </Link>
      <Link to="/more">
        <button>More</button>
      </Link>

      <Routes>
        <Route path="/hero" element={<Hero hero={hero} />} />
        <Route path="/about" element={<About hero={hero} />} />
        <Route
          path="/more"
          element={<More languages={languages} habilities={habilities} />}
        />
    
      </Routes>

      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}
      >
        Education
      </button>
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(false)}
      >
        Experience
      </button>

      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
    </div>
  );
}

export default App;
