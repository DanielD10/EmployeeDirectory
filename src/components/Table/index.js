import React from "react";
import "./style.css";

function Table() {

const employees = [
        {
            name: "Daniel Duran",
            email:"Daniel@gmail.com",
            position: "Web Developer",
            number: "210-222-2222"
        },
        {
            name: "Rick Roll",
            email:"Rick@yahoo.com",
            position: "Web Developer",
            number: "956-444-4444"
        },
        {
            name: "James Dean",
            email:"James@gmail.com",
            position: "Engineer",
            number: "210-888-8888"
        },
        {
            name: "Sam Smitty",
            email:"Sam@gmail.com",
            position: "Engineer",
            number: "210-999-8228"
        },
        {
            name: "Charles latts",
            email:"Charles@yahoo.com",
            position: "Accountant",
            number: "956-333-888"
        },
        
    ]
  return <table class="uk-table uk-table-hover uk-table-divider">
  <thead>
      <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Position</th>
          <th>Number</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Daniel Duran</td>
          <td>Daniel@gmail.com</td>
          <td>Web Developer</td>
          <td>210-222-2222</td>
          
      </tr>
      <tr>
          <td>Rick Roll</td>
          <td>Rick@yahoo.com</td>
          <td>Web Developer</td>
          <td>956-444-4444</td>
      </tr>
      <tr>
          <td>James Dean</td>
          <td>James@gmail.com</td>
          <td>Engineer</td>
          <td>210-888-8888</td>
      </tr>
      <tr>
          <td>Sam witty</td>
          <td>Sam@gmail.com</td>
          <td>Engineer</td>
          <td>210-999-8228</td>
      </tr>
      <tr>
          <td>Charles latts</td>
          <td>Charles@yahoo.com</td>
          <td>Accountant</td>
          <td>956-333-8888</td>
      </tr>
  </tbody>
</table>;
}

export default Table;
