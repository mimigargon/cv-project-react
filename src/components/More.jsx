import React from "react";

const More = ({ languages }) => {
  return (
    <div>
      <div className="languages card">
        <img src={languages[0].image} alt="Ilustration of a portrait of myself" />
        {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">
                <strong>Language:</strong> {item.language}
              </p>
              <p>
                <strong>Writing level:</strong> {item.wrlevel}
              </p>
              <p>
                <strong>Speaking level:</strong> {item.splevel}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
