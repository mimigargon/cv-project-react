import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEducation } from "../redux/education/education.actions";
import './NewEducation.scss';
const INITIAL_FORM = {
  name: "",
  date: "",
  where: "",
  internship: "",
};

const NewEducation = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(addEducation(form));
    navigate("/newEducation");
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        <span>Date</span>
        <input type="text" name="date" onChange={handleChange} />
      </label>
      <label>
        <span>Where</span>
        <input type="text" name="where" onChange={handleChange} />
      </label>
      <label>
        <span>Internship</span>
        <input type="text" name="internship" onChange={handleChange} />
      </label>
      <button className='add-ed-btn'>Add education</button>
    </form>
  );
};

export default NewEducation;
