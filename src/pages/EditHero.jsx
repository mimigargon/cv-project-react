import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editHero } from "../redux/hero/hero.actions";
import { useNavigate } from "react-router-dom";
import "./EditHero.scss";

const EditHero = () => {
  const { hero } = useSelector((state) => state.hero);

  const [form, setForm] = useState(hero);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(editHero(form));
    navigate("/hero");
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Phone</span>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Image</span>
        <input
          type="url"
          name="image"
          value={form.image}
          onChange={handleChange}
        />
      </label>
      <button className='edit-info-btn'>Edit information</button>
    </form>
  );
};

export default EditHero;
