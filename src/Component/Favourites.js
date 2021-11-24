import React from "react";
import Card from "./card";
import Filter from "./filter";
import { getData } from "../service";
import { useState, useEffect } from "react";

const Favourites = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromDb();
  }, []);

  const getDataFromDb = async () => {
    let { response } = await getData();

    const storeditems = localStorage.getItem("Favourite");
    let fav = JSON.parse(storeditems) || [];

    const favourites = fav.map((item) => {
      const index = response.findIndex((r) => r.fixture.id === item);
      return response[index];
    });

    setData(favourites);
  };

  return (
    <div className="App">
      <div className="filtercards">
        <Filter />
      </div>
      <div className="cards">
        {data.map((item) => (
          <Card item={item}> </Card>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
