import React from "react";
import Card from "./card";
import Filter from "./filter";
import { getData } from "../service";
import { useState, useEffect } from "react";
import moment from "moment";

const Game = () => {
  const [data, setData] = useState([]);
  const current = moment().format("Do MM YYYY");
  //Mon Nov 15 2021 18:46:26 GMT+0500
  //2021-11-15T13:46:21.763Z

  const fetchData = async () => {
    const { response } = await getData();
    let myDate;
    let live = response.filter(function (item) {
      myDate = moment(item.fixture.date).format("Do MM YYYY");
      return current == myDate;
    });

    setData(live);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="filtercards">
        <Filter />
      </div>
      <div className="cards">
        {data.map((item) => (
          <Card item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Game;
