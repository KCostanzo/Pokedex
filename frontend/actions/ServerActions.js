var Dispatcher = require('../dispatcher/dispatcher.js');
var PokemonConstants = require("../constants/pokemonConstants.js");


var ServerActions = {
  recieveAllPokemons: function(pokemon) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECIEVED,
      pokemon: pokemon
    });
  }
};


module.exports = ServerActions;
