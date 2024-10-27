import React from 'react';
import {Link} from "react-router-dom";
import "./header.css"

const Header = () => {
  return (
    <>
      <img className={"trees_i"} alt="Sierra mist" src={"https://www.contemporaryartbychristine.com/cdn/shop/files/OriginalAbstractLandscapeOilPaintinggreentreesautumntreesSierramountainswinterColoradohorizonlakereflectiongreylightbluegreenbrownwhiteUKCaliforniamodernforestlandscapecanvasprintwall_09e53cdf-cd0d-49e1-92f8-4bc53adf9c36_1445x.jpg?v=1724553431"}></img>
      <div className={"navbar_container"}>
        {/*<script src="../navbar_transparency.js"></script>*/}
        <div id={"navbar"}>
          <Link className={"nav_link"} to={"/"}>Home</Link>
          <Link className={"nav_link"} to={"/genre"}>Genre</Link>
          <Link className={"nav_link"} to={""}>Biography</Link>
          <Link className={"nav_link"} to={""}>Quiz</Link>
        </div>
      </div>
      </>
  );
};

export default Header;