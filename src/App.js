import './App.css';
import Genre from "./pages/genre";
import Home from "./pages/home"
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import ToASkylark from "./pages/to-a-skylark";
import Page from "./components/page";

function App() {
  return (
    <Router basename={"/"}>
      <Routes>
        <Route path={"/genre"} element={<Genre />}/>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/home"} element={<Home />}/>
        <Route path={"/to-a-skylark"} element={<ToASkylark />}/>
        <Route path={"*"} element={<Page>Page not yet implemented or address invalid</Page>}/>
      </Routes>
    </Router>
  );
}

export default App;
