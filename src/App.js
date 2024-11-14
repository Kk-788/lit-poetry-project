import './App.css';
import Genre from "./pages/genre";
import Home from "./pages/home"
import {HashRouter as Router, Routes, Route, Link} from "react-router-dom";

import Page from "./components/page";
import Poems from "./pages/poems";
import ToASkylark from "./pages/poemPages/to-a-skylark";
import OThereAreSpirits from "./pages/poemPages/o-there-are-spirits";
import Ozymandias from "./pages/poemPages/ozymandias"
import Biography from "./pages/biography";
import Sources from "./pages/sources";
import LitReview from "./pages/litReview";

function App() {
  return (
    <Router basename={"/"}>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/home"} element={<Home />}/>
        <Route path={"/genre"} element={<Genre />}/>
        <Route path={"/biography"} element={<Biography />}/>
        <Route path={"/sources"} element={<Sources />}/>
        <Route path={"/poemPages"} element={<Poems />} />
        <Route path={"/poemPages/to-a-skylark"} element={<ToASkylark />}/>
        <Route path={"/poemPages/o-there-are-spirits"} element={<OThereAreSpirits />}/>
        <Route path={"/poemPages/ozymandias"} element={<Ozymandias />}/>
        <Route path={"/lit-review"} element={<LitReview />}/>
        <Route path={"*"} element={<Page>Page not yet implemented or address invalid</Page>} />
      </Routes>
    </Router>
  );
}

export default App;
