import './App.css';
import Genre from "./pages/genre";
import Home from "./pages/home"
import {HashRouter as Router, Routes, Route} from "react-router-dom";

import Page from "./components/page";
import Poems from "./pages/poems";
import ToASkylark from "./pages/poemPages/to-a-skylark";
import OThereAreSpirits from "./pages/poemPages/o-there-are-spirits";
import Ozymandias from "./pages/poemPages/ozymandias"
import Timeline from "./pages/timeline";
import Citations from "./pages/citations";
import LitReview from "./pages/litReview";
import Quiz from "./pages/quiz";
import FinalEssay from "./pages/finalEssay";

function App() {
  return (
    <Router basename={"/"}>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/home"} element={<Home />}/>
        <Route path={"/genre"} element={<Genre />}/>
        <Route path={"/timeline"} element={<Timeline />}/>
        <Route path={"/citations"} element={<Citations />}/>
        <Route path={"/poems"} element={<Poems />} />
        <Route path={"/poems/to-a-skylark"} element={<ToASkylark />}/>
        <Route path={"/poems/o-there-are-spirits"} element={<OThereAreSpirits />}/>
        <Route path={"/poems/ozymandias"} element={<Ozymandias />}/>
        <Route path={"essays/lit-review"} element={<LitReview />}/>
        <Route path={"essays/final-essay"} element={<FinalEssay />}/>
        <Route path={"/quiz"} element={<Quiz />}/>
        <Route path={"*"} element={<Page>Address invalid</Page>} />
      </Routes>
    </Router>
  );
}

export default App;
