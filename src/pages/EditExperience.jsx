import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editExperience } from "../redux/experience/experience.actions";

const EditExperience = () => {
  const { id } = useParams();

  const { experience } = useSelector((state) => state.experience);
  const experienceToUpdate = experience[id];

  const [form, setForm] = useState(experienceToUpdate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(editExperience(form, id));
    navigate("/editExperience/:id");
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
        <span>Date</span>
        <input
          type="text"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Where</span>
        <input
          type="text"
          name="where"
          value={form.where}
          onChange={handleChange}
        />
      </label>
      <button>Edit</button>
    </form>
  );
};

export default EditExperience;
