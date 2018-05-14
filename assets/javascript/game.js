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
  //player choose their hero

  
  player = heroes[$(this).attr("id")];
  //showing player
  $("#player img").attr('src', player.iconUrl);
  $("#player-damage").text('Damage: ' + player.damage);
  $("#player-hp").text('HP: ' + player.hp);
  $("#player").show();
  $(this).hide();
  $("#display-message").find("h2").text('Please Choose Your Opponent');
  $(".heroes-pic").off("click");

  //player choose their opponent
  $('.heroes-pic').on('click', pickEnemy);
})


function pickEnemy() {
  enemy = heroes[$(this).attr("id")];
  //showing enemy
  $("#enemy img").attr('src', enemy.iconUrl);
  $("#enemy-counter-damage").text('Counter Damage: ' + enemy.counterDamage);
  $("#enemy-hp").text('HP: ' + enemy.hp);
  $("#enemy").show();
  $(this).hide();
}


//attack!!!!
$("#attackButton").on("click", function () {
  enemy.hp -= player.damage;
  player.hp -= enemy.counterDamage;
  player.damage += player.damage;

  $("#player-damage").text('Damage: ' + player.damage);
  $("#player-hp").text('HP: ' + player.hp);
  $("#enemy-counter-damage").text('Damage: ' + enemy.counterDamage);
  $("#enemy-hp").text('HP: ' + enemy.hp);

  if (enemy.hp < 1) {
    $("#enemy").hide();
  }
})