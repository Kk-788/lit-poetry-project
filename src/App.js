import './App.css';
import Genre from "./pages/genre";
import Home from "./pages/home"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router basename={"/lit-poetry-project"}>
      <Routes>
        <Route path={"/genre"} element={<Genre />}/>
        <Route path={"/"} element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
