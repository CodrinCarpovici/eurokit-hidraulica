import React from "react";
import data from "./pageData.js";
import Series from "./Series.js";

const sphereCylindersSeriesP = () => {
  return (
    <div>
      {data.filter(item => item.id == 2).map((item) => (
        <Series {...item.value} pos={item.id - 1} key={item.value} />
      ))}
    </div>
  );
};

export default sphereCylindersSeriesP;
