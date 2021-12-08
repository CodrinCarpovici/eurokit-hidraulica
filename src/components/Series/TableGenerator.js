import React from "react";
import tableData from "./tableData1.js";

const TableComponent = ({ data }) => {
let headings = Object.keys(data[0]);
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th colspan="16">Dimensions in mm</th>
        </tr>
        <tr scope="col">
          <th>Series</th>
          {headings.map((heading) => (
            <th>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr scope="col">
            <th scope="row">Series No.</th>
            {headings.map((heading) => (
              <td>{item[heading]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TableGenerator = ( {targetID} ) => {
  const filteredData = tableData.filter(item => item.id == targetID ).map(item => item.value);
  return <TableComponent data={filteredData} />;
};

export default TableGenerator;
