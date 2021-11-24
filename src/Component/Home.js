import React, { useState, useEffect, useMemo } from "react";
import Card from "./card";
import Filter from "./filter";
import { getData } from "../service";
import Pagenation from "./Pagenation";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const d = await getData();
    setData(d.response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pageData = useMemo(() => {
    const pageSize = 30;
    const slice = data.slice((page - 1) * pageSize, (page - 1) * pageSize + 30);
    return slice;
  }, [page, data]);

  return (
    <div className="App">
      <div className="filtercards">
        <Filter />
      </div>

      <div className="cards">
        {pageData.map((item) => (
          <Card item={item}></Card>
        ))}
      </div>
      <Pagenation page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
