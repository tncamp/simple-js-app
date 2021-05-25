
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === 'object') {
      pokemonList.push(pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    // button containing event listener
    let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('button-class');
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener('click', function (event) {
        showDetails (pokemon)
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

    function loadDetails(pokemon) {
      let url = pokemon.detailsUrl;
        return fetch(url).then (function (response) {
        return response.json();
      }).then(function (details) {
        //details of item
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = [...details.types];
      }).catch(function (e) {
        console.error(e);
      });
    }

    function showDetails(pokemon) {
      pokemonRepository.loadDetails(pokemon).then(function (){

        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');

        modalTitle.empty();
        modalBody.empty();

        let pokemonName = $('<h1>' + pokemon.name + '</h1>');
        let pokemonImage = $('<img class="modal-img" style="width:50%">');
          pokemonImage.attr('src' , pokemon.imageUrl);
        let pokemonHeight = $('<p>' + 'Height: ' + pokemon.height + '</p>');
        let pokemonTypes = document.createElement('span');
        let types = 'Type: ';
      pokemon.types.forEach(function (item) {
        types += item.type.name + ' ';
    });
      pokemonTypes.innerHTML = types;

      modalTitle.append(pokemonName);
      modalBody.append(pokemonImage);
      modalBody.append(pokemonHeight);
      modalBody.append(pokemonTypes);

      $('#pokemonModal').modal('toggle');
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

  //console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon){
    pokemonRepository.addListItem(pokemon);
  })
});
