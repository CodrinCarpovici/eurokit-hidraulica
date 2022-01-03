import React from "react";
import tableData from "./tableData1.js";

const TableComponent = ({ data }) => {
  let headings = Object.keys(data[0]);
  return (
    <table className="table table-dark table-striped table-bordered">
      <thead>
        <tr>
          <th colspan="16">Dimensiuni în mm</th>
        </tr>
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

const TableGenerator = ({ targetID }) => {
  const filteredData = tableData
    .filter((item) => item.id == targetID)
    .reduce((acc, item) => {
      acc = [...acc, ...item.value];
      return acc;
    }, []);
  return <TableComponent data={filteredData} />;
};

export default TableGenerator;
