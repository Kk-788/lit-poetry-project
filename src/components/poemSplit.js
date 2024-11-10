import React from 'react';
import "./poemSplit.js.css"

const PoemSplit = ({ poem, paragraph }) => {
  return (
    <div className={"poem-split"}>
      <pre className={"poem"}>{
        poem.map((line, i) =>
          <p style={{fontWeight: "lighter"}} className={"poem-line font-mw"} key={i}>{line}</p>
        )
      }</pre>
      <p className={"paragraph"}>{paragraph}</p>
    </div>
  );
};

export default PoemSplit;