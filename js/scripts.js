
let pokemonRepository = (function () {
  let repository = [
    {
      name: 'Pikachu ',
      height: '1.4',
      type: ' Electric',
      abilities:' Static'
    },
    {
      name: 'Ivysaur ',
      height: '3.3',
      type: ['Grass' , ' Poison'],
      abilities: ' Overgrow'
    },
    {
      name: 'Squirtle ',
      height:'1.8',
      type: ' Water',
      abilities: ' Torrent'
    },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return repository;
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    // button containing event listener
    let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    button.addEventListener('click', function (event) {
      showDetails (pokemon.name)
    });
  }

  function showDetails(pokemon){
    console.log(pokemon);
  }
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();


console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
