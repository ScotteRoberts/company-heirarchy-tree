import React, { Component } from 'react';

export default class CompanyHeirarchy extends Component {
  render() {
    const { company } = this.props;
    console.log(company);
    return <h2>{company.root.name}</h2>;
  }
}
