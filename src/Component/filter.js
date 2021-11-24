import "../App.css";
import { Link } from "react-router-dom";

function Filter() {
  return (
    <div className="filtercontainer">
      <div className="head">
        <h1>Filter results</h1>
      </div>
      <div className="buttons">
        <div className="buttons1">
          <Link to="/">
            <button>Show all</button>
          </Link>
        </div>
        <div className="buttons1">
          <Link to="/Favourites">
            <button>Favourites</button>
          </Link>
        </div>
        <div className="buttons1">
          <Link to="/Game">
            <button>Game Today</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Filter;
