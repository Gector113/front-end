import React from "react";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const params = useLocation();
  const page = params.pathname.split("/").pop();

  return (
    <div className="header">
      <Link to="/" style={{ color: "#000000" }}>
        <h1 className="header__logo">Tasty breads</h1>
      </Link>

      <Button link={page === "cart" ? "/" : "/cart"} bigbutton>
        go to {page === "cart" ? "home" : "cart"}
      </Button>
    </div>
  );
}

export default Header;
