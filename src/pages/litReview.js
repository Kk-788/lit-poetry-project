import React from 'react';
import essayLitReview from "../texts/essayLitReview.pdf";
import Page from "../components/page";
import "../components/pdfEmbed.css"

const LitReview = () => {

  return (
    <Page title={"Lit Review"}>
      <iframe id="pdfEmbed" src={essayLitReview} />
    </Page>
  );
};

export default LitReview;