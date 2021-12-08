import React from "react";
import data from "./pageData.js";
import Series from "./Series.js";

const eyeCylindersSeriesP = () => {
  return (
    <div>
      {data
        .filter((item) => item.id == 5)
        .map((item) => (
          <Series {...item.value} pos={item.id - 1} key={item.value} />
        ))}
    </div>
  );
};

export default eyeCylindersSeriesP;
