import './App.css';
import Genre from "./pages/genre";
import Home from "./pages/home"
import { HashRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router basename={"/"}>
      <Routes>
        <Route path={"/genre"} element={<Genre />}/>
        <Route path={"/"} element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
