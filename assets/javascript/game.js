//import heroes
'use strict';
import heroes from './heroes.js';

//declare player and enemy, hide them temporarily on the page
let player;
let enemy;
$("#player").hide();
$("#enemy").hide();

//create a function to show the html block for the hero
const generateHeroFigure = function (hero) {
  const heroFigure = $(`<figure id=${hero.name} class='heroes-pic text-danger m-3'> <img class='animated-gif' src=${hero.iconUrl}> </figure>'`)
  return heroFigure;
}

//loop through the heroes object and create each html block for each hero
for (let hero in heroes) {
  const hero = heroes[hero];
  const heroFigure = generateHeroFigure(hero);
  $('#heroes-selection').append(heroFigure);
}


let isHeroChosen = false;
let isEnemyChosen = false;
let isEnemyDead = false;
let enemyLeft = 3;
let isGameOver = false;

$(".heroes-pic").on("click", function() {
  //player choose their hero
  if(isHeroChosen === false) {
    player = heroes[$(this).attr("id")];
    console.log('player ' + player);
    //showing player
    $("#player img").attr('src', player.iconUrl);
    $("#player-damage").text('Damage: ' + player.damage);
    $("#player-hp").text('HP: ' + player.hp);
    $("#player").show();
    $(this).hide();
    isHeroChosen = true;
    $("#display-message").find("h2").text('Please Choose Your Opponent');
  }
  //player choose their opponent
  else if(isEnemyChosen === false) {
    enemy = heroes[$(this).attr("id")];
    isEnemyDead = false;
    enemyLeft--;
    //showing enemy
    $("#enemy img").attr('src', enemy.iconUrl);
    $("#enemy-counter-damage").text('Counter Damage: ' + enemy.counterDamage);
    $("#enemy-hp").text('HP: ' + enemy.hp);
    $("#enemy").show();
    $(this).hide();
    isEnemyChosen = true;
    $("#display-message").find("h2").text('You Can Now Fight Your Opponent');
  }

  //disable hero selection when game is over
  if(isGameOver === true) {
    $(".heroes-pic").off("click");
  }
})


//attack!!!!
$("#attackButton").on("click", function () {
  if(isEnemyDead === false) {

    enemy.hp -= player.damage;
    player.hp -= enemy.counterDamage;
    player.damage += player.damage;
    
    $("#player-damage").text('Damage: ' + player.damage);
    $("#player-hp").text('HP: ' + player.hp);
    $("#enemy-counter-damage").text('Damage: ' + enemy.counterDamage);
    $("#enemy-hp").text('HP: ' + enemy.hp);
  }
  
  //when enemy is dead
  if(enemy.hp < 1) {
    isEnemyDead = true;
    $("#enemy").hide();
    isEnemyChosen = false;
    $("#display-message").find("h2").text('Please Choose Your Opponent');
  }

  //game is won when no enemy left
  if(enemyLeft < 1 && player.hp < 1) {
    $("#display-message").find("h2").text('LOL! Nice One, You Both Die!');
  }

  else if (enemyLeft < 1) {
    console.log('enemy left ' + enemyLeft);
    $("#display-message").find("h2").text(player.name + ', You Are The Last One Standing!');
    isGameOver = true;
    return;
  }

  //game is lost when player has no hp left
  else if (player.hp <1) {
    isGameOver = true;
    isEnemyChosen = true;
    $("#attackButton").off("click");
    $("#display-message").find("h2").text(player.name + ', You Are Defeated!');
  }
})