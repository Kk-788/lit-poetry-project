import React from 'react';
import {Link} from "react-router-dom";
import "./header.css"

const Header = (props) => {
  return (
    <>
      <span>
        <a className={"font-sans"} href={"https://www.contemporaryartbychristine.com/products/sierra-mist-giclee-print-forest-landscape-oil-painting-framed-un-framed-copy?variant=49560388239651"}>Sierra Mist | Christine Bell Contemporary Fine Art</a>
      </span>
      <div className={"trees-container"}>
        <h1 className={"font-hand"} id="title">{props.title}</h1>
        <img className={"trees"} alt={"\"Sierra Mist\" by Christine Bell"} src={"https://www.contemporaryartbychristine.com/cdn/shop/files/OriginalAbstractLandscapeOilPaintinggreentreesautumntreesSierramountainswinterColoradohorizonlakereflectiongreylightbluegreenbrownwhiteUKCaliforniamodernforestlandscapecanvasprintwall_09e53cdf-cd0d-49e1-92f8-4bc53adf9c36_1445x.jpg?v=1724553431"}></img>
      </div>
      <div className={"navbar-container"}>
        <div id={"navbar"} className={"font-hand"}>
          <Link to={"/"}>Home</Link>
          <Link to={"/genre"}>Genre</Link>
          <Link to={"/timeline"}>Timeline</Link>
          <div className="dropdown">
            <a className={"dropdown-button"}>
              Poems
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor"
                   className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 9l6 6l6 -6"/>
              </svg>
            </a>
            <div className={"dropdown-content font-hand"}>
              <Link to={"/poems/o-there-are-spirits"}>O! there are spirits . . .</Link>
              <Link to={"/poems/ode-to-the-west-wind"}>Ode to the West Wind</Link>
              <Link to={"/poems/to-a-skylark"}>To a Skylark</Link>
              <Link to={"/poems/ozymandias"}>Ozymandias</Link>
            </div>
          </div>
          <div className="dropdown">
            <a className={"dropdown-button"}>
              Essays
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                   className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 9l6 6l6 -6"/>
              </svg>
            </a>
            <div className={"dropdown-content"}>
              <Link to={"/essays/lit-review"}>Lit Review</Link>
              <Link to={"/essays/final-essay"}>Final Essay</Link>
            </div>
          </div>
          <Link to={"/quiz"}>Quiz</Link>
        </div>
      </div>
    </>
  );
};

export default Header;