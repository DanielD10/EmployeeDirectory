import React, { useState, useRef } from "react";
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

  const [currentEmployees, setCurrentEmployees] = useState(employees);
  function sortEmail() {
    const newEmployees = [...employees];
    newEmployees.sort((a, b) => (a.email > b.email ? 1 : -1));
    setCurrentEmployees(newEmployees);
  }
  const nameRef = useRef();
  function filterName(e){
      e.preventDefault();
    const name = nameRef.current.value;
    const newEmployees = employees.filter(function(item){
        return item.name.includes(name)
    })
    setCurrentEmployees(newEmployees)
  }

  return (
    <div>
      <form>
        <input
          className="uk-input uk-form-width-small"
          type="text"
          placeholder="Input"
          ref={nameRef}
        />
        <button className="uk-button uk-button-default" onClick={filterName}>Button</button>
      </form>
      <table className="uk-table uk-table-hover uk-table-divider">
        <thead>
          <tr>
            <th>Name</th>
            <th>
              <button onClick={sortEmail}>Email</button>
            </th>
            <th>Position</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => {
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
    </div>
  );
}

export default Table;
