export default class Employee {
  constructor(params) {
    this.name = params.name || '';
    this.reportsTo = params.reportsTo || '';
    this.employees = params.employees || [];
  }
}
