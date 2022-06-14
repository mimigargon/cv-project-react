import React from "react";
import "./Habilities.scss";

const Habilities = ({ habilities }) => {
  return (
    <div>
      <div className="habilities-card">
        {habilities.map((item) => {
            return (
           <p>{item}</p>

            )
        })}
      </div>
    </div>
  );
};

export default Habilities;
