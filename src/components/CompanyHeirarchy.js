import React, { Component } from 'react';

export default class CompanyHeirarchy extends Component {
  render() {
    const { company } = this.props;
    console.log(company);
    return (
      <ul>
        {company.root.employees.map((employee, i) => (
          <li key={i}>
            <button>{employee.name}</button>
          </li>
        ))}
      </ul>
    );
  }
}
