import React from "react";

var currYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>copyright @ {currYear}</p>
    </footer>
  );
}

export default Footer;
