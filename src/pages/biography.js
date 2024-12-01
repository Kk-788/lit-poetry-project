import React from 'react';
import Page from "../components/page";
import txtBiography from "../texts/txtBiography.jsx"
import srcs from "../texts/srcsBiography"
import "./biography.css"

const Timeline = () => {
  return (
    <Page>
      {txtBiography}
      <p>
        Sources:
        {
          srcs.map((source, index) =>
            <>
              {" "}<a href={source[0]}>{source[1]}</a>{index<3 && ","}
            </>
          )
        }
      </p>
    </Page>
  );
};

export default Timeline;