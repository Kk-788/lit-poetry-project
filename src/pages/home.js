import React from 'react';
import Page from "../components/page";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <Page>
      <div className={"font-mw"}>
        <h1 id={"title"}>Home</h1>
        <h4>site is a work in progress and nothing is final</h4>
        <p>Percy Bysshe Shelley was a Romantic poet in the early 19th century.</p>
        <Link to={"biography"}>Get started with the biography</Link>
        <p>(more to be added soon)</p>
      </div>
    </Page>
  );
};

export default Home;