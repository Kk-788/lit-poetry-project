import React from 'react';
import {Link} from "react-router-dom";
import "./header.css"

const Header = () => {
  return (
    <>
      <div className={"trees-container"}>
        <img className={"trees"} alt={"\"Sierra Mist\" by Christine Bell"} title={"\"Sierra Mist\" by Christine Bell"} src={"https://www.contemporaryartbychristine.com/cdn/shop/files/OriginalAbstractLandscapeOilPaintinggreentreesautumntreesSierramountainswinterColoradohorizonlakereflectiongreylightbluegreenbrownwhiteUKCaliforniamodernforestlandscapecanvasprintwall_09e53cdf-cd0d-49e1-92f8-4bc53adf9c36_1445x.jpg?v=1724553431"}></img>
      </div>
      <div className={"navbar-container"}>
        {/*<script src="../navbar_transparency.js"></script>*/}
        <div id={"navbar"} className={""}>
          <Link to={"/"}>Home</Link>
          <Link to={"/genre"}>Genre</Link>
          <Link to={"/biography"}>Biography</Link>
          <Link to={"/poemPages"}>Poems</Link>
          <Link to={"/quiz"}>Quiz</Link>
        </div>
      </div>
    </>
  );
};

export default Header;