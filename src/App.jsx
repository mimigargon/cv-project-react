import { Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import Education from "./components/Educations";
import Experience from "./components/Experience";
import About from "./components/About";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import EditHero from "./pages/EditHero";
import NewExperience from "./pages/NewExperience";
import EditExperience from "./pages/EditExperience";
import EditEducation from "./pages/EditEducation";
import NewEducation from "./pages/NewEducation";
import { CV } from "./CV/CV";
import "./App.scss";

const { hero, education, experience, languages, skills } = CV;

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/hero">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About me</button>
        </Link>
        <Link to="/education">
          <button>Education</button>
        </Link>
        <Link to="/experience">
          <button>Experience</button>
        </Link>
        <Link to="/languages">
          <button>Languages</button>
        </Link>
        <Link to="/skills">
          <button>Skills</button>
        </Link>
      </nav>

      <Routes>
        <Route path="/hero" element={<Hero hero={hero} />} />
        <Route path="/editHero" element={<EditHero />} />
        <Route path="/about" element={<About hero={hero} />} />
        <Route
          path="/languages"
          element={<Languages languages={languages} />}
        />
        <Route
          path="/skills"
          element={<Skills skills={skills} />}
        />
        <Route
          path="/education"
          element={<Education education={education} />}
        />
        <Route path='/editEducation/:id' element={<EditEducation/>}/>
        <Route path='/newEducation' element={<NewEducation/>}/>
        <Route
          path="/experience"
          element={<Experience experience={experience} />}
        />
        <Route path="/newExperience" element={<NewExperience />} />
        <Route path="/editExperience/:id" element={<EditExperience />} />
      </Routes>
    </div>
  );
}

export default App;
