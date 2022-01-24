const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const firsLastName = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return firsLastName;
}

module.exports = getEmployeeByName;
