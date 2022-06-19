import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Hero.scss";

const Hero = () => {
  const { hero } = useSelector((state) => state.hero);

  return (
    <div>
        <img className='hero-image' src={hero.image} alt="Ilustration of a portrait of myself" />
      <div className="hero-card">

        <h2>
          {hero.name} {hero.lastname}
        </h2>
        <p> 🌍 {hero.city}</p>
        <p>📆 {hero.birthdate}</p>
        <p>
          <a href={"mailto:" + hero.email}> 📧 mireiag77@gmail.com</a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>
          <a href={hero.gitHub}> 💾 GitHub</a>
        </p>
        <div>
        </div>
      </div>
          <Link to={`/editHero`}>
            <button>Edit</button>
          </Link>
    </div>
  );
};

export default Hero;
