const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal = {}) {
  const { specie, sex } = animal; // valores que vão entrar no parâmetro
  let animals = {}; // armazena valores para retorno da função.

  species.forEach((result) => {
    animals[result.name] = result.residents.length; // para cada nome do result de residente add mais 1 ao length de residente
  });
  // Se name == o parâmetro, vai direto pro resident e procura as informações.
  if (specie) { animals = species.find((result) => result.name === specie).residents.length; }
  // Se o parâmetro for sex.
  if (sex) {
    // acha a espécie e o nome, se o parâmetro for sex, retona residentes.
    const contAnimal = species.find((result) => result.name === specie).residents;
    // retorna se ele achar o residente, verifica a qntdade de animais pelo sexo do animal.
    return contAnimal.filter((result) => result.sex === sex).length;
  }

  return animals;
}
module.exports = countAnimals;
