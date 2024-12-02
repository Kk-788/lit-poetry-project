import React from 'react';
import "./footer.css"
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className={"footer"}>
      <div>
        <p>Kyrylo Kulikovskiy</p>
        <p>AP Literature 2024-2025</p>
        <Link to={"/citations"}>Sources Referenced</Link>
      </div>
      <a title={"Code repository"} href={"https://github.com/Kk-788/lit-poetry-project"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path d="m 17 7.8296 l 1.6965 1.5268 c 1.5425 1.3883 2.3138 2.0825 2.3138 2.9732 c 0 0.8907 -0.7713 1.5849 -2.3138 2.9732 l -1.6965 1.5268 m -3.0132 -11.8296 l -1.9868 7.4149 l -1.9868 7.4148 m -3.0131 -12.0001 l -1.6965 1.5268 c -1.5426 1.3883 -2.3138 2.0825 -2.3138 2.9732 c 0 0.8907 0.7713 1.5849 2.3138 2.9732 l 1.6965 1.5268" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M13.9868 5L12 12.4149L10.0132 19.8297" stroke="#1C274C" />
          <path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="#1C274C" />
        </svg>
      </a>
    </div>
  );
};

export default Footer;