/**
 * Thanks to https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393
 * for a wonderful example on how to do tree searching
 */

import Queue from './Queue';
import Employee from './Employee';

export default class Company {
  constructor(params) {
    this.root = new Employee({ name: 'kip' });
  }

  bfSearch = callback => {
    const queue = new Queue();

    queue.enqueue(this.root);

    let currentTree = queue.dequeue();

    while (currentTree) {
      for (let i = 0, { length } = currentTree.employees; i < length; i++) {
        queue.enqueue(currentTree.employees[i]);
      }
      if (callback) callback(currentTree);
      currentTree = queue.dequeue();
    }
  };

  contains = (callback, traversal) => {
    traversal.call(this, callback);
  };

  addEmployee = (newEmployeeName, supervisorName, traversal) => {
    const newEmployee = new Employee({ name: newEmployeeName });
    let supervisor = null;

    this.contains(employee => {
      if (employee.name === supervisorName) {
        supervisor = employee;
      }
    }, traversal);

    if (supervisor) {
      newEmployee.reportsTo = supervisor;
      console.log('add employee', newEmployee);
      supervisor.employees.push(newEmployee);
    } else {
      throw new Error('Cannot add employee to non-existing supervisor.');
    }

    console.log(this.root);
  };

  removeEmployee = (removedEmployeeName, supervisorName, traversal) => {
    let supervisor = null;
    let removedEmployee = null;
    let index;

    this.contains(employee => {
      if (employee.name === supervisorName) {
        supervisor = employee;
      }
    }, traversal);

    if (supervisor) {
      index = supervisor.employees.findIndex(employee => employee.name === removedEmployeeName);

      if (index === undefined) {
        throw new Error('Employee to remove does not exist.');
      } else {
        removedEmployee = supervisor.employees.splice(index, 1);
      }
    } else {
      throw new Error('Supervisor does not exist.');
    }

    return removedEmployee;
  };
}
