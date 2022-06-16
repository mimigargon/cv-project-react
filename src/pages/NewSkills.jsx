import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSkill } from "../redux/skills/skills.actions";

const INITIAL_FORM = {
  hard: "",
  soft: "",
};

const NewSkills = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(addSkill(form));
    navigate("/newSkills");
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Hard skill</span>
        <input type="text" name="hard" onChange={handleChange} />
      </label>
      <label>
        <span>Soft skill</span>
        <input type="text" name="soft" onChange={handleChange} />
      </label>
      <button>Add skill</button>
    </form>
  );
};

export default NewSkills;
