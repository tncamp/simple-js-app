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

for (let i = 0; (pokemonList.length) ; i++){
  if (pokemonList[i].height > 2){
    document.write(pokemonList[i].name + ' (height:) ' + pokemonList[i].height + ' -Wow, that\'s big! ' + pokemonList[i].type + ' ' + pokemonList[i].abilities + ' ' + '<br/>')
  }
  else { document.write(pokemonList[i].name + ' (height:)' + pokemonList[i].height + ' ' + pokemonList[i].type + ' ' + pokemonList[i].abilities + ' ' + '<br/>')
  }
}
