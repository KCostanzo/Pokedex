var Dispatcher = require('../dispatcher/dispatcher.js');
var PokemonConstants = require("../constants/pokemonConstants.js");
var Util = require('../util/apiUtil.js');


var ClientActions = {
  fetchAllPokemons: Util.fetchAllPokemons
};


module.exports = ClientActions;
