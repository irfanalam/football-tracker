import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const Pagenation = ({ page, setPage }) => {
  return (
    <div className="containerrr">
      <div className="root">
        <Pagination
          style={{ display: "flex", justifyContent: "center", bottom: 0 }}
          count={10}
          page={page}
          onChange={(e, num) => setPage(num)}
        />
      </div>
    </div>
  );
};

export default Pagenation;
