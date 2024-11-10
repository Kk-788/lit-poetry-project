import React from 'react';
import Page from "../../components/page";
import poem from "../../texts/txtOzymandias.js"
import paragraph from "../../texts/paraOzymandias"
import PoemSplit from "../../components/poemSplit";
const Ozymandias = () => {
  return (
    <Page>
      <PoemSplit poem={poem} paragraph={paragraph} />
    </Page>
  );
};

export default Ozymandias;