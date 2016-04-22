var React = require('react');
var ReactDOM = require('react-dom');
var PokeStore = require('../stores/pokemon.js');

var PokemonDetail = React.createClass({

  getStateFromStore: function() {
    return PokeStore.find(parseInt(this.props.params.pokemonId));
  },

  render: function() {
    var result;
    var pokemon = this.getStateFromStore();
    if (pokemon) {
      result = <div className='detail'>
        Name: {pokemon.name}<br/>
        Attack: {pokemon.attack},
        Defense: {pokemon.defense}<br/>
        Moves: {pokemon.moves.join(", ")}
        <img src={pokemon.image_url}></img>
      </div>;
    } else {
      result = <div></div>;
    }
    return(
        <div className='pokemon-detail-pane'>
          {result}
        </div>
    );
  },
  contextTypes: {router: React.PropTypes.object.isRequired},

});

module.exports = PokemonDetail;
