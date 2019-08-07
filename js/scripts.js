
var pokemonRepository = (function () {
  const searchInput = document.querySelector('.search-bar__input');
  var pokemons = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // ~~~~~~~~~~~~~~~~~~~~~
  // repository functions
  // ~~~~~~~~~~~~~~~~~~~~~

  function add(pokemon) {
      pokemons.push(pokemon);
    }

  function getAll() {
      return pokemons;
    }

  function addListItem(pokemon) {

    //select already existing element
    var $newList = document.querySelector(".pokemon-list");

    //create li
    var $listItem = document.createElement("li");

    //create a button
    var $button = document.createElement("button");

    //append list to $newList
    $newList.appendChild($listItem);

    //add text to button
    $button.innerText = pokemon.name;

    //append button to list
    $listItem.appendChild($button);

    //add class to button
    $button.classList.add("name-button");

    //add event listener to list
    $button.addEventListener('click', function(event) {showDetails(pokemon);
    });
  }

  function getPokemonHeight(pokemonHeight){
    return (pokemonHeight > 20) ? (pokemonHeight / 10) + 'm (woah that\'s big!)<br>'
         : (pokemonHeight < 10) ? (pokemonHeight / 10) + 'm (small one!)<br>'
         :  (pokemonHeight / 10) + 'm<br>';
    }
  function getPokemonTypes(pokemonTypes){
    let result = ''
      if(pokemonTypes.includes('bug')){
        result += '<img src="img/types/Bug.png">'
      }
      if(pokemonTypes.includes('dark')){
        result += '<img src="img/types/Dark.png">'
      }
      if(pokemonTypes.includes('dragon')){
        result += '<img src="img/types/Dragon.png">'
      }
      if(pokemonTypes.includes('electric')){
        result += '<img src="img/types/Electric.png">'
      }
      if(pokemonTypes.includes('fairy')){
        result += '<img src="img/types/Fairy.png">'
      }
      if(pokemonTypes.includes('fighting')){
        result += '<img src="img/types/Fighting.png">'
      }
      if(pokemonTypes.includes('fire')){
        result += '<img src="img/types/Fire.png">'
      }
      if(pokemonTypes.includes('ghost')){
        result += '<img src="img/types/Ghost.png">'
      }
      if(pokemonTypes.includes('grass')){
        result += '<img src="img/types/Grass.png">'
      }
      if(pokemonTypes.includes('ground')){
        result += '<img src="img/types/Ground.png">'
      }
      if(pokemonTypes.includes('ice')){
        result += '<img src="img/types/Ice.png">'
      }
      if(pokemonTypes.includes('normal')){
        result += '<img src="img/types/Normal.png">'
      }
      if(pokemonTypes.includes('poison')){
        result += '<img src="img/types/Poison.png">'
      }
      if(pokemonTypes.includes('psychic')){
        result += '<img src="img/types/Psychic.png">'
      }
      if(pokemonTypes.includes('rock')){
        result += '<img src="img/types/Rock.png">'
      }
      if(pokemonTypes.includes('steel')){
        result += '<img src="img/types/Steel.png">'
      }
      if(pokemonTypes.includes('water')){
        result += '<img src="img/types/Water.png">'
      }
        return result
  }

//fetch data from API
function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (pokemon) {
      var pokemon = {
        name: pokemon.name,
        detailsUrl: pokemon.url,
        height: pokemon.height,
        types: pokemon.types,
      };
      //add data from api to repository
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

//get pokemon details using Url from pokemon object in parameter
function loadDetails(pokemon) {
  var url = pokemon.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    // now add the details to the item
    pokemon.imageUrl = details.sprites.front_default;
    pokemon.height = details.height;
    pokemon.types = [];
          details.types.forEach(function(type) {
            pokemon.types.push(type.type.name);
          });
  }).catch(function (e) {
    console.error(e);
  });
}


// ~~~~~~~~~~~~~~~~~~~~~
// pokemon info modal functions
// ~~~~~~~~~~~~~~~~~~~~~

//create pokemon info modal
function showPokemonModal (pokemon) {
  var $pokemonModalContainer = document.querySelector("#modal-container");
  //clear existing content
  $pokemonModalContainer.innerHTML = "";
  // create modal div and assign class
  var pokemonModal = document.createElement("div");
  pokemonModal.classList.add("pokemonmodal")

  var closeButtonElement = document.createElement("button");
  closeButtonElement.classList.add("pokemonmodal-close");
  closeButtonElement.innerText = "Close";
  closeButtonElement.addEventListener("click", hidePokemonModal);

  var nameElement = document.createElement("h1");
  nameElement.innerText = pokemon.name;

  var infoElement = document.createElement("p");
  infoElement.innerHTML = `<b>Height:</b> ${pokemonRepository.getPokemonHeight(pokemon.height)}
  <br><b>Types:</b> ${pokemonRepository.getPokemonTypes(pokemon.types)}
  <br><img src="${pokemon.imageUrl}">`;

  pokemonModal.appendChild(closeButtonElement);
  pokemonModal.appendChild(nameElement);
  pokemonModal.appendChild(infoElement);
  $pokemonModalContainer.appendChild(pokemonModal);

  $pokemonModalContainer.classList.add("is-visible");
  }

function hidePokemonModal () {
  var $pokemonModalContainer = document.querySelector("#modal-container");
  $pokemonModalContainer.classList.remove("is-visible");
}

//show pokemon info modal
function showDetails(pokemon) {
pokemonRepository
  .loadDetails(pokemon)
  .then(function () {
    showPokemonModal(pokemon);
});
}

//search bar function
function searchFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("pokeSearchInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("pokemon-list");
  li = ul.getElementsByTagName("li");


  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("button")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


window.addEventListener("keydown", (e) => {
  var $pokemonModalContainer = document.querySelector("#modal-container");
  if (e.key === 'Escape' && $pokemonModalContainer.classList.contains("is-visible")){
    hidePokemonModal();
  }
});

document.querySelector('#modal-container').addEventListener("click", (e) => {
  var target = e.target;
  var $pokemonModalContainer = document.querySelector("#modal-container");
  if (target === $pokemonModalContainer) {
    hidePokemonModal();
  }
});



  //public functions
  return {
    add: add,
    getAll: getAll,
    getPokemonTypes: getPokemonTypes,
    getPokemonHeight: getPokemonHeight,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showPokemonModal: showPokemonModal,
    hidePokemonModal: hidePokemonModal,
    searchFunction: searchFunction
  };
})();


pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});



/*
//getAll pokemons and loop through each one
pokemonRepository.getAll().forEach(pokemon => {
  //call addList function which takes pokemon
  //create list & button & appends name to the button
  pokemonRepository.addListItem(pokemon);
});

//NEW foreach to print pokemon details
pokemonRepository.getAll().forEach(pokemon =>
  document.write
  (`<div class="pokemon"><img src="${pokemon.img}" width=200><br>
  <h3>${pokemon.name}</h3><br>
  <b>height: </b>${pokemonRepository.getPokemonHeight(pokemon.height)}<br>
  <b>types: <div class="pokemontypes">${pokemonRepository.getPokemonTypes(pokemon.types)}</b></div></div><p>`)
  );

//OLD for loop to print pokemon details
for (var i = 0; i < pokemons.length; i++){
  if(pokemons[i].height > 65){
    document.write('<div class="pokemon"><img src=' + pokemons[i].img + ' width=200><br><h3>' + pokemons[i].name + '</h4><br><b>height: </b>' + pokemons[i].height + ' (woah that\'s big!)<br><b>types: </b>' + pokemons[i].types + '</div><p>')
  }else{
    document.write('<div class="pokemon"><img src=' + pokemons[i].img + ' width=200><br><h3>' + pokemons[i].name + '</h4><br><b>height: </b>' + pokemons[i].height + '<br><b>types: </b>' + pokemons[i].types + '</div><p>')
  }
}
//OLD foreach to print pokemon details
pokemons.forEach(pokemon =>
  (pokemon.height > 65) ?
    (document.write('<div class="pokemon"><img src="' + pokemon.img + '" width=200><br><h3>' + pokemon.name + '</h4><br><b>height:</b> ' + pokemon.height + ' (woah that\'s big!)<br><b>types:</b> ' + pokemon.types + '</div><p>'))
    :
    (document.write('<div class="pokemon"><img src="' + pokemon.img + '" width=200><br><h3>' + pokemon.name + '</h4><br><b>height:</b> ' + pokemon.height + '<br><b>types:</b> ' + pokemon.types + '</div><p>'))
  );
*/
