import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSkillHard } from "../redux/skills/skills.actions";


const INITIAL_FORM = {
  hard: "",
};

const NewSkillsHard = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(addSkillHard(form));
    navigate("/skills");
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
      <button>Add skill</button>
    </form>
  );
};

export default NewSkillsHard;
