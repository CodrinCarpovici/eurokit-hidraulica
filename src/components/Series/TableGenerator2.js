import React from "react";
import tableData from "./tableData2.js";

const TableComponent2 = ({ data }) => {
  let headings = Object.keys(data[0]);
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th colspan="2">Cilindri</th>
          <th colspan="1">Lungime(mm.)</th>
          <th colspan="1">Unități(No.)</th>
          <th colspan="8">Unități(diam. in mm)</th>
          <th colspan="1">Greutate(kg)</th>
        </tr>
        <tr scope="col">
          {headings.map((heading) => (
            <th>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr scope="col">
            {headings.map((heading) => (
              <td>{item[heading]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};



const TableGenerator2 = ( {targetID} ) => {
  const filteredData = tableData.filter(item => item.id == targetID ).map(item => item.value);
  return <TableComponent2 data={filteredData[0]} />;
};

export default TableGenerator2;
