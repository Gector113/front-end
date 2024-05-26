import React from "react";
import { Link } from "react-router-dom";

function Button({ onClick, link, children, bigbutton }) {
  if (link) {
    return (
      <Link to={link}>
        <button className={`button ${bigbutton && "bigbutton"}`} onClick={onClick}>
          {children}
        </button>
      </Link>
    );
  }
  return (
    <button className={`button ${bigbutton && "bigbutton"}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
