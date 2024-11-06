import React from 'react';
import Page from "../components/page";
import {Link} from "react-router-dom";

const Poems = () => {
  return (
    <Page>
      <Link to={"to-a-skylark"}>To A Skylark</Link>
      <br/>
      <Link to={"o-there-are-spirits"}>O! there are spirits of the air</Link>
    </Page>
  );
};

export default Poems;