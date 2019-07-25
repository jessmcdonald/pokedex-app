
const pokemonRepository = (function () {
  const pokemons = [
    {name: 'Bulbasaur', height: 70, types: ['grass', ' poison'], img: 'img/bulbasaur.png'},
    {name: 'Charmander', height: 60, types: ['fire'], img: 'img/charmander.png'},
    {name: 'Squirtle', height: 50, types: ['water'], img: 'img/squirtle.png'},
    {name: 'Pikachu', height: 40, types: ['electric'], img: 'img/pikachu.png'},
    {name: 'Jigglypuff', height: 50, types: ['fairy', ' normal'], img: 'img/jigglypuff.png'}
  ];

  function add(pokemon) {
      pokemons.push(pokemon);
    },
  function getAll() {
      return pokemons;
    }
  return {
    add: add,
    getAll: getAll
  };
})();

//NEW foreach to print pokemon details
pokemonRepository.getALL.forEach(pokemon =>
  (pokemon.height > 65) ?
    (document.write('<div class="pokemon"><img src="' + pokemon.img + '" width=200><br><h3>' + pokemon.name + '</h4><br><b>height:</b> ' + pokemon.height + ' (woah that\'s big!)<br><b>types:</b> ' + pokemon.types + '</div><p>'))
    :
    (document.write('<div class="pokemon"><img src="' + pokemon.img + '" width=200><br><h3>' + pokemon.name + '</h4><br><b>height:</b> ' + pokemon.height + '<br><b>types:</b> ' + pokemon.types + '</div><p>'))
  );

/*OLD for loop to print pokemon details
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

/*
//function to get pokemon height
function getPokemonHeight(pokemonHeight) {
  return (pokemonHeight > 65) ? pokemonHeight + 'cm (woah that\'s big!)<br>'
       : (pokemonHeight < 45) ? pokemonHeight + 'cm (small one!)<br>'
       :  pokemonHeight + 'cm<br>';
  }
//write specific pokemon height
document.write(getPokemonHeight(pokemons[0].height));
//write all pokemon heights
pokemons.forEach(pokemon =>
    document.write(getPokemonHeight(pokemon.height)));
*/

/*I used the same logic as worked for the height but I could not get it to work for types,
is it because types contains an array?
how can I solve this correctly?

//function to get pokemon types, I tried a few ideas but none worked!
function getPokemonTypes(pokemonTypes) {
  return (pokemonTypes === 'fairy') ? '<style="color: pink";>' + pokemonType + '</style><br>'
       : (pokemonTypes === 'normal') ? '<style="color: grey";>' + pokemonType + '</style><br>'
       : (pokemonTypes.includes ('water')) ? '<style="color: blue";>' + pokemonType + '</style><br>'
       : (pokemonTypes.includes ('grass')) ? '<style="color: green";>' + pokemonType + '</style><br>'
       : (pokemonTypes === types.includes ('fire')) ? '<style="color: orange";>' + pokemonType + '</style><br>'
       : (pokemonTypes === types.includes ('electric')) ? '<style="color: yellow";>' + pokemonType + '</style><br>'
       : (pokemonTypes.includes 'poison') ? '<style="color: purple";>' + pokemonType + '</style><br>';
    }

//write specific pokemon types
document.write(getPokemonTypes(pokemons[1].types));
//write all pokemon types
  pokemons.forEach(pokemon =>
    document.write(getPokemonTypes(pokemon.types)));
*/
