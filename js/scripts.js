
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

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
      pokemonRepository.loadDetails(pokemon).then(function () {
        showModal(pokemon);
      });
    }

// show/hide modal

    function showModal(pokemon, details) {
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.innerHTML = '';

      let modal = document.createElement('div');
      modal.classList.add('modal');

      let closeButtonElement = document.createElement ('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);

//pokemon name
      let titleElement = document.createElement('h1');
      titleElement.innerText = pokemon.name;

//pokemon image
      let imageElement = document.createElement('img');
        imageElement.src = pokemon.imageUrl;

//pokemon height
      let heightElement = document.createElement('p');
      heightElement.innerText = 'Height: ' + pokemon.height;

      let typesElement = document.createElement('ul');
      let types = 'Type: ';
      pokemon.types.forEach(function (item) {
        types += '<li>' + item.type.name + '</li>'
    });
      typesElement.innerHTML = types;

      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(imageElement);
      modal.appendChild(heightElement);
      modal.appendChild(typesElement);
      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible');
}

function hideModal() {
  letmodalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
}
});

modalContainer.addEventListener('click', (e) => {
// Since this is also triggered when clicking INSIDE the modal
// We only want to close if the user clicks directly on the overlay
let target = e.target;
if (target === modalContainer) {
  hideModal();
  }
});

  //document.querySelector('#show-modal').addEventListener('click', () => {
  //  showModal('Modal Title' , 'This is the modal content');
//  });

//})();

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
