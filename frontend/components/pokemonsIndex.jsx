var React = require('react');
var ReactDOM = require('react-dom');
var PokemonStore = require('../stores/pokemon.js');
var ClientActions = require('../actions/clientActions.js');
var PokemonIndexItem = require('./pokemonIndexItem');


var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return {pokemons: PokemonStore.all()};
  },

  componentDidMount: function() {
    this.token = PokemonStore.addListener(this._onChange);
    ClientActions.fetchAllPokemons();
  },

  componentWillUnmount: function() {
    this.token.remove();
  },

  _onChange: function() {
    this.setState({
      pokemons: PokemonStore.all()
    });
  },

  render: function() {
    // debugger;
    var nextId = 0;
    var pokemonItems = Object.keys(this.state.pokemons).map(function (pokemon) {
      nextId++;
      return <PokemonIndexItem key={nextId} pokemon={this.state.pokemons[pokemon]}/>;
    }.bind(this));
    return(
      <div>
        <ul>
          {pokemonItems}
        </ul>
      </div>
    );
  }
});

module.exports = PokemonsIndex;
