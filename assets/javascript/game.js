//set up game object

const luna = {
  damage: 10,
  counterDamage: 4,
  hp: 100,
}

const qop = {
  damage: 7,
  counterDamage: 5,
  hp: 100,
}
let player;
let enemy;

$("#player").hide();
$("#enemy").hide();
$("#luna").on("click", () => {
  player = luna;
  enemy = qop;

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
  
})
