var React = require('react');
var ReactDOM = require('react-dom');
var HashHistory = require('react-router').hashHistory;

var pokemonIndexItem = React.createClass({
  handleClick : function (id) {
    HashHistory.push("pokemon/" + this.props.pokemon.id);
  },
  render: function() {
    return <li className="poke-list-item" onClick={this.handleClick}>{this.props.pokemon.name}:
       {this.props.pokemon.poke_type}</li>;
  },
  contextTypes: {router: React.PropTypes.object.isRequired}
});

module.exports = pokemonIndexItem;
