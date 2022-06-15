import { Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import Education from "./components/Educations";
import Experience from "./components/Experience";
import About from "./components/About";
import Languages from "./components/Languages";
import Habilities from './components/Habilities';
import EditHero from "./pages/EditHero";
import NewHero from "./pages/NewHero";
import { CV } from "./CV/CV";
import "./App.scss";

const { hero, education, experience, languages, habilities } = CV;

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
      <Link to='/education'>
        <button>Education</button>
      </Link>
      <Link to='/experience'>
        <button>Experience</button>
      </Link>
      <Link to="/languages">
        <button>Languages</button>
      </Link>
      <Link to='/habilities'>
        <button>Habilities</button>
      </Link>
    </nav>


      <Routes>
        <Route path="/hero" element={<Hero hero={hero} />} />
        <Route path='/editHero/:id' element={<EditHero/>}/>
        <Route path='/newHero' element={<NewHero/>}/>
        <Route path="/about" element={<About hero={hero} />} />
        <Route path="/languages" element={<Languages languages={languages}/>}/>
        <Route path='/habilities' element={<Habilities habilities={habilities} />}/>
        <Route path='/education' element={<Education education={education}/>}/>
        <Route path='/experience' element={<Experience experience={experience}/>}/>
      </Routes>

    </div>
  );
}

export default App;
