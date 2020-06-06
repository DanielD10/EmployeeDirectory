import React from "react";
import "./style.css";
import TableRow from "../TableRow";

function Table() {
  const employees = [
    {
      name: "Daniel Duran",
      email: "Daniel@gmail.com",
      position: "Web Developer",
      number: "210-222-2222",
    },
    {
      name: "Rick Roll",
      email: "Rick@yahoo.com",
      position: "Web Developer",
      number: "956-444-4444",
    },
    {
      name: "James Dean",
      email: "James@gmail.com",
      position: "Engineer",
      number: "210-888-8888",
    },
    {
      name: "Sam Smitty",
      email: "Sam@gmail.com",
      position: "Engineer",
      number: "210-999-8228",
    },
    {
      name: "Charles latts",
      email: "Charles@yahoo.com",
      position: "Accountant",
      number: "956-333-888",
    },
  ];
  return (
    <table className="uk-table uk-table-hover uk-table-divider">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Position</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
          return (
            <TableRow
              name={employee.name}
              email={employee.email}
              position={employee.position}
              number={employee.number}
              key={employee.email}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
