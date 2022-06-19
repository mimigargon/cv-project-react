import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteLanguage } from "../redux/languages/languages.actions";
import { Link } from "react-router-dom";
import "./Languages.scss";

const Languages = () => {
  const { languages } = useSelector((state) => state.languages);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="languages-card">
        {languages.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.language}</h2>
              <p>
                <strong>Writing level:</strong> {item.wrlevel}
              </p>
              <p>
                <strong>Speaking level:</strong> {item.splevel}
              </p>
              <div>
                <Link to={`/editLanguage/${index}`}>
                  <button>Edit</button>
                </Link>
                <button
                  onClick={() => {
                    dispatch(deleteLanguage(item));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        <Link to={`/newLanguage`}>
          <button>Add language</button>
        </Link>
      </div>
    </div>
  );
};

export default Languages;
