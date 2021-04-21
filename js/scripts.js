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
  document.write( pokemon.name + ' ' + pokemon.height + ' ' + pokemon.type + ' ' + pokemon.abilities + ' ');
}

pokemonList.forEach(myLoopFunction);
