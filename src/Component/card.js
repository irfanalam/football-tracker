import React, { useState, useEffect } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import moment from "moment";
import "../App.css";

function Carditem(props) {
  const { item } = props;

  const storeditems = localStorage.getItem("Favourite");
  let fav = JSON.parse(storeditems) || [];
  const [live, setLive] = useState(false);

  const currentTime = moment().format("HH:mm");
  const currentDate = moment().format("Do MM YYYY");

  const [selectedItems, setSelecteditems] = useState([]);

  useEffect(() => {
    setSelecteditems(fav);
    const itemTime = moment(item.fixture.date).format("HH:mm");
    const itemDate = moment(item.fixture.date).format("Do MM YYYY");
    if (currentDate === itemDate && currentTime >= itemTime) setLive(true);
  }, [fav]);

  const setFav = (id) => {
    if (fav.includes(id)) {
      fav = fav.filter(function (value) {
        return value != id;
      });
    } else {
      fav.push(id);
    }
    setSelecteditems(fav);
    localStorage.setItem("Favourite", JSON.stringify(fav));
  };

  return (
    <div className="card">
      <div className="flex-container">
        <div className="live">{live ? "live" : "-"}</div>
        {/* {live ? <div className="live">live</div> : "-"} */}
        <div className="name">
          <img className="imglogo" src={item.league?.logo} width="20px"></img>
          {item.league?.name}
        </div>
        <div className="icon" style={{ color: "black" }}>
          <button onClick={() => setFav(item.fixture.id)}>
            {selectedItems.includes(item.fixture.id) ? (
              <StarIcon>star</StarIcon>
            ) : (
              <StarBorderIcon>star-border</StarBorderIcon>
            )}
          </button>
        </div>
      </div>
      <div id="card_main">
        <div className="row1">
          <img
            src={item.teams?.home.logo}
            alt=""
            className="cardimg1"
            width="50px"
          />
          <p className="img1text">{item.teams?.home.name}</p>
        </div>

        <div className="container">
          <h5 className="venue">
            <span className="clock">
              {" "}
              {moment(item.fixture.date).format("Do MMM")} at{" "}
            </span>

            {moment(item.fixture.date).format("h:mm A")}
          </h5>
          <div className="scores">
            {/* {item.goals?.home && item.goals?.away ? ( */}
            <p className={"scoreHome"}>
              {" "}
              <span className={item.goals?.home === 0 ? "blackDiv" : "blueDiv"}>
                {item.goals?.home}{" "}
              </span>
              :{" "}
              <span className={item.goals?.away === 0 ? "blackDiv" : "blueDiv"}>
                {item.goals?.away}{" "}
              </span>
            </p>
            {/* ) : (
              " "
            )} */}
          </div>
          <p className="degree"> {item.fixture?.status.elapsed}'</p>
          <p className="referee">
            {" "}
            <span className="refr">
              {item?.fixture?.referee ? "referee:" : "-"}
            </span>
            <span>
              <b> {item?.fixture?.referee} </b>
            </span>
          </p>
        </div>
        <div className="row2">
          <img
            src={item.teams?.away.logo}
            alt=""
            className="cardimg2"
            width="50px"
          />
          <p className="img2text">{item.teams?.away.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Carditem;
