import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editLanguage } from "../redux/languages/languages.actions";

const EditLanguage = () => {
    const { id } = useParams();
  
    const { languages } = useSelector((state) => state.languages);
    const languageToUpdate = languages[id];
  
    const [form, setForm] = useState(languageToUpdate);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = (ev) => {
      ev.preventDefault();
      dispatch(editLanguage(form, id));
      navigate("/editLanguage/:id");
    };
  
    const handleChange = (ev) => {
      const { name, value } = ev.target;
      setForm({ ...form, [name]: value });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          <span>Language</span>
          <input
            type="text"
            name="language"
            value={form.language}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Writing level</span>
          <input
            type="text"
            name="wrlevel"
            value={form.wrlevel}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Speaking level</span>
          <input
            type="text"
            name="where"
            value={form.splevel}
            onChange={handleChange}
          />
        </label>
        <button>Edit</button>
      </form>
    );
  };
  
  export default EditLanguage;
  