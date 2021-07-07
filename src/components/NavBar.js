import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map(el => <a href={"#" + el} key={el}>{el}</a>)}</nav>;
}

export default NavBar;
