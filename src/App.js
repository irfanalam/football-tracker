// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Favourites from "./Component/Favourites";
import Game from "./Component/Game";

function App() {
  return (
    // <div className="App">
    //   <div className="filtercards">
    //     <Filter />
    //   </div>
    //   <div className="cards">
    //     {data.map((item) => (
    //       <Card item={item}></Card>
    //     ))}
    //   </div>
    // </div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Favourites" element={<Favourites />}></Route>
        <Route path="/Game" element={<Game />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
