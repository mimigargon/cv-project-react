import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {addLanguage} from '../redux/languages/languages.actions';

const INITIAL_FORM = {
   language: "",
    wrlevel: "",
    splevel: "",
  };
  
  const NewLanguage = () => {
    const [form, setForm] = useState(INITIAL_FORM);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = (ev) => {
      ev.preventDefault();
      dispatch(addLanguage(form));
      navigate("/languages");
    };
  
    const handleChange = (ev) => {
      const { name, value } = ev.target;
      setForm({ ...form, [name]: value });
      console.log(form);
    };
    return (
      <form onSubmit={handleSubmit}>
        <label>
          <span>Language</span>
          <input type="text" name="language" onChange={handleChange} />
        </label>
        <label>
          <span>Writing level</span>
          <input type="text" name="wrlevel" onChange={handleChange} />
        </label>
        <label>
          <span>Speaking level</span>
          <input type="text" name="splevel" onChange={handleChange} />
        </label>
        <button>Add language</button>
      </form>
    );
  };
  
  export default NewLanguage;
  
