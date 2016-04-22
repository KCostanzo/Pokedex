var React = require('react');
var ReactDOM = require('react-dom');
var PokemonIndex = require('./components/pokemonsIndex.jsx');
var PokemonDetail = require('./components/pokemonDetail.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var HashHistory =  require('react-router').hashHistory;

var App = React.createClass({
  render : function () {
    return (
      <div id='pokedex'>
        <h2>Pokedex</h2>
        <PokemonIndex className='pokemon-index-pane'/>
        <div>{this.props.children}</div>
      </div>
    );
  }
});

var routes = (
  <Route path='/' component={App}>
    <Route path='pokemon/:pokemonId' component={PokemonDetail}>
    </Route>
  </Route>
);

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <Router history={HashHistory}>{routes}</Router>,
    document.getElementById('root')
  );
});
