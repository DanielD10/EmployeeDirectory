import React from "react";

function TableRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.position}</td>
      <td>{props.number}</td>
    </tr>
  );
}

export default TableRow;
