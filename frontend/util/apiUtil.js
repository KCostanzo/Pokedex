var Dipatcher = require('../dispatcher/dispatcher.js');
var ServerActions = require('../actions/ServerActions.js');

var pokeFetch = {
  fetchAllPokemons: function() {
    $.ajax({
      url: 'api/pokemon',
      method: 'GET',
      dataType: 'json',
      success: function(pokemon) {
        ServerActions.recieveAllPokemons(pokemon);
      }
    });
  }
};



module.exports = pokeFetch;
