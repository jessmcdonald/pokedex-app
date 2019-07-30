
const pokemonRepository = (function () {
  const pokemons = [
    {name: 'Bulbasaur', height: 70, types: ['grass', 'poison'], img: 'img/bulbasaur.png'},
    {name: 'Charmander', height: 60, types: ['fire'], img: 'img/charmander.png'},
    {name: 'Squirtle', height: 50, types: ['water'], img: 'img/squirtle.png'},
    {name: 'Pikachu', height: 40, types: ['electric'], img: 'img/pikachu.png'},
    {name: 'Jigglypuff', height: 50, types: ['fairy', 'normal'], img: 'img/jigglypuff.png'}
  ];

  function add(pokemon) {
      pokemons.push(pokemon);
    }
  function getAll() {
      return pokemons;
    }
  function addListItem(pokemon, $pokemon-list ) {
    var button = document.createElement("button");
    button.innerText = "${pokemon.name}";
    $button.classlist.add("name-button");
    $listItem.appendChild(button);
    $button.addEventListener('click', function(event) {showDetails(pokemon);
    });
  }
  function showDetails(pokemon) {
    console.log${pokemon.name};
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
  //public functions
  return {
    add: add,
    getAll: getAll,
    getListItem: getListItem,
    getPokemonHeight: getPokemonHeight,
    getPokemonTypes: getPokemonTypes
  };
})();

//create new variable
var $newList = document.querySelector(".pokemon-list")

//UPDATED foreach to print pokemon details
pokemonRepository.getAll().forEach(pokemon => {
  var $listItem = document.createElement("li");
  $newList.appendChild(li);
  pokemonRepository.addListItem(pokemon);
});


/*
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
