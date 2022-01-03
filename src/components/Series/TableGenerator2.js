import React from "react";
import tableData from "./tableData2.js";

const TableComponent2 = ({ data }) => {
  let headings = Object.keys(data[0]);
  return (
    <table className="table table-dark table-striped table-bordered">
      <thead>
        <tr className="t-heading" scope="col">
          {headings.map((heading) => (
            <th>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr className="t-content" scope="col">
            {headings.map((heading) => (
              <td>{item[heading]}</td>
            ))}
          </tr>
          
        ))}
      </tbody>
    </table>
  );
};

const TableGenerator2 = ({ targetID }) => {
  const filteredData = tableData
    .filter((item) => item.id == targetID)
    .map((item) => item.value);
  return <TableComponent2 data={filteredData[0]} />;
};

export default TableGenerator2;
