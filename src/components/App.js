import React, { Component } from 'react';
import Company from '../Company';
import CompanyHeirarchy from './CompanyHeirarchy';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const company = new Company();
    company.addEmployee('jeff', 'kip', company.bfSearch);
    company.addEmployee('mackeever', 'kip', company.bfSearch);
    company.addEmployee('andrew', 'jeff', company.bfSearch);

    this.state = {
      company,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Company Heirarchy Tree</h1>
        <CompanyHeirarchy company={this.state.company} />
      </div>
    );
  }
}

export default App;
