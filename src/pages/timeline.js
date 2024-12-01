import React from 'react';
import Page from "../components/page";
import txtTimeline from "../texts/txtTimeline.js"
import "./timeline.css"

const Timeline = () => {
  return (
    <Page title={"Timeline"}>
      {txtTimeline}
      <p>
        <a href="https://kids.britannica.com/students/article/Percy-Bysshe-Shelley/277026">Britannica Kids</a>, <a href="https://www.poetryfoundation.org/poets/percy-bysshe-shelley">Poetry Foundation</a>, <a href="https://www.theguardian.com/books/2004/jan/24/featuresreviews.guardianreview1">The Guardian</a>, <a href="https://redflag.org.au/article/shelleys-revolutionary-poetry">Red Flag</a></p>
    </Page>
  );
};

export default Timeline;