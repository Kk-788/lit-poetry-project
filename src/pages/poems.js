import React from 'react';
import Page from "../components/page";
import {Link} from "react-router-dom";

const Poems = () => {
  return (
    <Page>
      <Link to={"to-a-skylark"}>
        <i>To A Skylark</i>
      </Link>
      <br/>
      <Link to={"o-there-are-spirits"}>
        <i>O! there are spirits of the air</i>
      </Link>
      <br/>
      <Link to={"ozymandias"}>
        <i>Ozymandias</i>
      </Link>
    </Page>
  );
};

export default Poems;