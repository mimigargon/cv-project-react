import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editEducation } from "../redux/education/education.actions";
import { useNavigate, useParams } from "react-router-dom";

const EditEducation = () => {
  const { id } = useParams();

  const { education } = useSelector((state) => state.education);
  const educationToUpdate = education[id];

  const [form, setForm] = useState(educationToUpdate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(editEducation(form, id));
    navigate("/editEducation");
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
      <label>
        <span>Internship</span>
        <input
          type="text"
          name="internship"
          value={form.internship}
          onChange={handleChange}
        />
      </label>
      <button>Edit</button>
    </form>
  );
};

export default EditEducation;
