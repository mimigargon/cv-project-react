import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEducation } from "../redux/education/education.actions";
import { Link } from "react-router-dom";
import "./Educations.scss";

const Education = () => {
  const { education } = useSelector((state) => state.education);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="education card">
        {education.map((item, index) => {
          return (
            <div key={index}>
              <p className="name">{item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>Internship: {item.internship}</p>
              <div>
                <Link to={`/editEducation/${index}`}>
                  <button>Edit</button>
                </Link>
                <button
                  onClick={() => {
                    dispatch(deleteEducation(item));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        <Link to={`/newEducation`}>
          <button>Add</button>
        </Link>
      </div>
    </div>
  );
};

export default Education;
