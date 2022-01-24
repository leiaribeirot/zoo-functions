const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // Se é true ou false, se true faz que tenha o mesmo valor do id.
  const managerIs = employees.some((result) => result.managers.includes(id));// id parâmetro principal
  return managerIs;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else if (isManager(managerId) === true) {
    const relatedEmployees = employees
      .filter((result) => result.managers
        .includes(managerId))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    return relatedEmployees;
  }
}

module.exports = { isManager, getRelatedEmployees };
