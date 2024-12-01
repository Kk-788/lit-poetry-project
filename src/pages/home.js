import React from 'react';
import Page from "../components/page";
import {Link} from "react-router-dom";
import "./home.css"

const Home = () => {
  return (
    <Page title={"Percy Shelley"}>
      <div className={"image-beside"}>
        <div className={"font-sans"}>
          <h2 className={"font-hand"}>
            “A superb craftsman, a lyric poet without rival, and surely one of the most advanced sceptical intellects ever to write a poem”
          </h2>
          <h4>&#09;&mdash; Harold Bloom, American literary critic (<a href="https://redflag.org.au/article/shelleys-revolutionary-poetry">Red Flag</a>)</h4>
          <p>Percy Bysshe Shelley (1792&ndash;1822) was in the early 19th century.</p>
          <Link to={"timeline"}>Get started with the timeline</Link>
        </div>
        <div className={"img-embed"}>
          <img alt={"\"Shelley Composing ‘Prometheus Unbound’ in the Baths of Caracalla\" by Joseph Severn"} src={"https://d3d00swyhr67nd.cloudfront.net/w1200h1200/collection/CBR/WOT/CBR_WOT_E_677-001.jpg"}/>
        </div>
      </div>
    </Page>
  );
};

export default Home;