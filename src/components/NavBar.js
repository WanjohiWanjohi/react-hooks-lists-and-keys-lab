import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((linkObj, index) => (
    <a key={index} href={"#" + linkObj}>{linkObj}</a>
  ));
  return (<nav>
    {linkElements}
  </nav>);
}

export default NavBar;
