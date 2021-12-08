import React from "react";
import data from "./pageData.js";
import Series from "./Series.js";

const sphereCylindersSeriesQ = () => {
  return (
    <div>
      {data
        .filter((item) => item.id == 3)
        .map((item) => (
          <Series {...item.value} pos={item.id - 1} key={item.value} />
        ))}
    </div>
  );
};

export default sphereCylindersSeriesQ;
