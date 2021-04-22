var pokemonRepository = (function(){
  var pokemonList = [
    {
      name: 'Pikachu',
      height: '1.4',
      type: 'electric',
      abilities:'static'
    },
    {
      name: 'Ivysaur',
      height: '3.3',
      type: ['grass' , 'poison'],
      abilities: 'overgrow'
    },
    {
      name: 'Squirtle',
      height:'1.8',
      type: 'water',
      abilities: 'torrent'
    },
];

  function getAll () {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height > 2) {
    document.write( pokemon.name + ' (height: ' + pokemon.height +')' + '- Wow, that is big! '  + 'Type: ' + pokemon.type + ' Abilities:' + pokemon.abilities + ' ' + '<br>')
  }else{
    document.write( pokemon.name + '(height: ' + pokemon.height +')' + ' Type:' + pokemon.type + ' Abilities:' + pokemon.abilities + ' ' + '<br>')
  }
});
