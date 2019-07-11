const pokemons = [
  {name: 'Bulbasaur', height: 70, types: ['grass', ' poison'], img: 'img/bulbasaur.png'},
  {name: 'Charmander', height: 60, types: ['fire'], img: 'img/charmander.png'},
  {name: 'Squirtle', height: 50, types: ['water'], img: 'img/squirtle.png'},
  {name: 'Pikachu', height: 40, types: ['electric'], img: 'img/pikachu.png'},
  {name: 'Jigglypuff', height: 50, types: ['fairy', ' normal'], img: 'img/jigglypuff.png'}
];

pokemons.forEach(pokemon =>
  (pokemon.height > 65) ?
    (document.write('<div class="pokemon"><img src="' + pokemon.img + '" width=200><br><h3>' + pokemon.name + '</h4><br><b>height:</b> ' + pokemon.height + '   (woah that\'s big!)<br><b>types:</b> ' + pokemon.types + '</div><p>'))
    :
    (document.write('<div class="pokemon"><img src="' + pokemon.img + '" width=200><br><h3>' + pokemon.name + '</h4><br><b>height:</b> ' + pokemon.height + '<br><b>types:</b> ' + pokemon.types + '</div><p>'))
  );


/* WIP
  function changeTypesFontColor() {
        if (pokemon.types = 'fire' {
        text.color = '#99C262';
        } else

*/
