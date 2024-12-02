import React from 'react';
import Page from "../../components/page";
import poem from "../../texts/txtOzymandias.js"
import paragraph from "../../texts/paraOzymandias"
import PoemSplit from "../../components/poemSplit";
const Ozymandias = () => {
  return (
    <Page title={"Ozymandias"}>
      <p>Subject: The ruins of a statue of King Ozymandias in a desert</p>
      <p>Attitude: Knowing, ironic, mocking</p>
      <p>Audience: People in power, or those concerned about others’ power</p>
      <PoemSplit poem={poem} paragraph={paragraph} />
    </Page>
  );
};

export default Ozymandias;