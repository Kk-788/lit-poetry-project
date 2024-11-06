import './App.css';
import Genre from "./pages/genre";
import Home from "./pages/home"
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import ToASkylark from "./pages/to-a-skylark";
import Page from "./components/page";
import Poems from "./pages/poems";
import OThereAreSpirits from "./pages/o-there-are-spirits";
import Biography from "./pages/biography";

function App() {
  return (
    <Router basename={"/"}>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/home"} element={<Home />}/>
        <Route path={"/genre"} element={<Genre />}/>
        <Route path={"/biography"} element={<Biography />}/>
        <Route path={"/poems"} element={<Poems />} />
        <Route path={"/poems/to-a-skylark"} element={<ToASkylark />}/>
        <Route path={"/poems/o-there-are-spirits"} element={<OThereAreSpirits />}/>
        <Route path={"*"} element={<Page>Page not yet implemented or address invalid</Page>}/>
      </Routes>
    </Router>
  );
}

export default App;
