import React from "react";
import data from "./pageData.js";
import Series from "./Series.js";

const underNutCylinders = () => {
  return (
    <div>
      {data
        .filter((item) => item.id == 6)
        .map((item) => (
          <Series {...item.value} pos={item.id - 1} key={item.value} />
        ))}
    </div>
  );
};

export default underNutCylinders;
