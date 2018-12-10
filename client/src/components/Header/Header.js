import React from "react";
import "./Header.css";

const Header = () => {
  return(
    <div className="jumbotron container">
      <h1>The New York Times</h1>
      <h2>- Article Search Engine -</h2>
      <h3>Built with React and the NYT Article Search API</h3>
      <hr/>
      <h4>search for and annotate articles of interest!</h4>
    </div>
  )
};

export default Header;