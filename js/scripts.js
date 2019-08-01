
var pokemonRepository = (function () {
  var pokemons = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
    return (pokemonHeight > 65) ? pokemonHeight + 'cm (woah that\'s big!)<br>'
         : (pokemonHeight < 45) ? pokemonHeight + 'cm (small one!)<br>'
         :  pokemonHeight + 'cm<br>';
    }
  function getPokemonTypes(pokemonTypes){
    let result = ''
      if(pokemonTypes.includes('fire')){
        result += '<div style= "color: red";>fire</div>'
      }
      if(pokemonTypes.includes('poison')){
        result += '<div style= "color: purple";>poison</div>'
      }
      if(pokemonTypes.includes('fairy')){
        result += '<div style= "color: #FF007E";>fairy</div>'
      }
      if(pokemonTypes.includes('normal')){
        result += '<div style= "color: grey";>normal</div>'
      }
      if(pokemonTypes.includes('electric')){
        result += '<div style= "color: #FF9933";>electric</div>'
      }
      if(pokemonTypes.includes('water')){
        result += '<div style= "color: blue";>water</div>'
      }
      if(pokemonTypes.includes('grass')){
        result += '<div style= "color: green";>grass</div>'
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
    // Now we add the details to the item
    pokemon.imageUrl = details.sprites.front_default;
    pokemon.height = details.height;
    pokemon.types = Object.keys(details.types);
  }).catch(function (e) {
    console.error(e);
  });
}

function showDetails(pokemon) {
pokemonRepository.loadDetails(pokemon).then(function () {
  console.log(pokemon);
});
}

  //public functions
  return {
    add: add,
    getAll: getAll,
    getPokemonTypes: getPokemonTypes,
    getPokemonHeight: getPokemonHeight,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    addListItem(pokemon);
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
