import React from "react";
import "./Hero.scss";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      {<img src={hero.image} alt="Ilustration of a portrait of myself" />}
      <div className="card">
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
          <a href={hero.github}> 💾 GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
