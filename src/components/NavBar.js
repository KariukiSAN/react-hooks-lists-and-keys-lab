import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const page = links.map(arr => <a href={"#"+arr} key={arr}>{arr}</a>)
  return (
    <nav>
      {page}
    </nav>
    );
}

export default NavBar;

