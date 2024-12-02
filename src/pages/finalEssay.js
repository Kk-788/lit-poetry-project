import React from 'react';
import finalEssay from "../texts/finalEssay.pdf";
import Page from "../components/page";
import "../components/pdfEmbed.css"
import LitReview from "./litReview";

const FinalEssay = () => {
  return (
    <Page title={"Final Essay"}>
      <iframe id="pdfEmbed" src={finalEssay}/>
    </Page>
  );
};

export default FinalEssay;