import text from "../texts/txtSources"

import React from 'react';
import Page from "../components/page";

const Sources = () => {
  return (
    <Page>
      <h2>Sources Used</h2>
      <pre className={""}>{

        // text.map(line =>
        //   <p>
        //     {line.match(/www/).index}
        //   </p>
        // )
      }</pre>
    </Page>
  );
};

export default Sources;