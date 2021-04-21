//creates array of pokemon and their characteristics
let pokemonList = [];
  pokemonList = [
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

function myLoopFunction(pokemon){
  if (pokemon.height > 2) {
    document.write( pokemon.name + ' (height: ' + pokemon.height +')' + '- Wow, that is big!'  + pokemon.type + ' ' + pokemon.abilities + ' ' + '<br>')
  }else{
    document.write( pokemon.name + '(height: ' + pokemon.height +')' + pokemon.type + ' ' + pokemon.abilities + ' ' + '<br>')
  }
};

pokemonList.forEach(myLoopFunction);
