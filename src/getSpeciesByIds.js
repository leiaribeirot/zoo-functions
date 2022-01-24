const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data'); // descontrução de especies

function getSpeciesByIds(...ids) {
  // Mapa do ID's, comparar mapResult com findResult e verifica se igual.
  const arrSpecies = ids.map((mapResult) => species
    .find((findResult) => findResult.id === mapResult));
  return arrSpecies;
}

module.exports = getSpeciesByIds;
