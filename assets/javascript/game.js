//import heroes
'use strict';
import heroes from './heroes.js';


let player;
let enemy;
$("#player").hide();
$("#enemy").hide();


const generateHeroFigure = function (hero) {
  const heroFigure = $(`<figure id=${hero.name} class='heroes-pic border text-danger m-3'> <img class='animated-gif' src=${hero.iconUrl}> </figure>'`)
  return heroFigure;
}

for (let hero in heroes) {
  const hero = heroes[hero];
  const heroFigure = generateHeroFigure(hero);
  $('#heroes-selection').append(heroFigure);
}

$(".heroes-pic").on("click", function() {
  player = heroes[$(this).attr("id")];


  //showing player
  $("#player img").attr('src', player.iconUrl);
  $("#player-damage").text('Damage: ' + player.damage);
  $("#player-hp").text('HP: ' + player.hp);
  $("#player").show();

  //showing enemy
  $("#enemy img").attr('src', './assets/images/qop.gif');
  $("#enemy-counter-damage").text('Damage: ' + enemy.counterDamage);
  $("#enemy-hp").text('HP: ' + enemy.hp);
  $("#enemy").show();
  
  //attack!!!!
  $("#attackButton").on("click", function() {
    enemy.hp -= player.damage;
    player.hp -= enemy.counterDamage;
    player.damage += player.damage;

    $("#player-damage").text('Damage: ' + player.damage);
    $("#player-hp").text('HP: ' + player.hp);
    $("#enemy-counter-damage").text('Damage: ' + enemy.counterDamage);
    $("#enemy-hp").text('HP: ' + enemy.hp);

    if(enemy.hp < 1) {
      $("#enemy").hide();
    }
  })

})


