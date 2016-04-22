var Store = require("flux/utils").Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var pokemonStore = new Store(AppDispatcher);
var pokeConstants = require('../constants/pokemonConstants.js');

var _pokemons = {};

var resetPokemons = function(pokemon) {
  _pokemons = {};
  for (var i = 0; i < pokemon.length; i++) {
    _pokemons[pokemon[i].id] = pokemon[i];
  }
  pokemonStore.__emitChange();
};

pokemonStore.all = function() {
  var result = [];
  Object.keys(_pokemons).forEach(function(key) {
    result.push(_pokemons[key]);
  });

  return result;
};

pokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case pokeConstants.POKEMONS_RECIEVED:
      resetPokemons(payload.pokemon);
      break;
  }
};

pokemonStore.find = function(id) {
  // debugger;
  return (_pokemons[id]);
};


module.exports = pokemonStore;
