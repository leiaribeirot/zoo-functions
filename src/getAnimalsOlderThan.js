const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // Separação dos animais por nomes. Retornar se for igual a name.
  // Retona a listas dos animais com a idade.
  const findByName = species.find((findResult) => findResult.name === animal);
  return findByName.residents.every((everyResult) => everyResult.age >= age);
}

module.exports = getAnimalsOlderThan;
