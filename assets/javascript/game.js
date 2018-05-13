//import heroes
'use strict';
import heroes from './heroes.js';
console.log(heroes);


let player;
let enemy;
$("#player").hide();
$("#enemy").hide();

//assign heroes pictures
$("#luna img").attr('src', heroes.luna.iconUrl);
$("#qop img").attr('src', heroes.qop.iconUrl);

let figure = $(".heroes-pic");
figure.on("click", () => {
  console.log(figure);
  player = figure.attr("value");
  console.log(figure.attr("value"));
  //enemy = heroes.qop;
  //showing player
  $("#player img").attr('src', './assets/images/luna.gif');
  $("#player-damage").text('Damage: ' + player.damage);
  $("#player-hp").text('HP: ' + player.hp);
  $("#player").show();

  //showing enemy
  $("#enemy img").attr('src', './assets/images/qop.gif');
  $("#enemy-counter-damage").text('Damage: ' + enemy.counterDamage);
  $("#enemy-hp").text('HP: ' + enemy.hp);
  $("#enemy").show();
  
  //attack!!!!
  $("#attackButton").on("click", () => {
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

