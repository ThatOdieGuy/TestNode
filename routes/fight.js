var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //res.render('index', { title: 'Express' });

  var results = [];

  var damageDealtLeft = randomDamage();
  var damageDealtRight = randomDamage();

  results.push(new FightResult(900, damageDealtLeft, damageDealtLeft > damageDealtRight));
  results.push(new FightResult(88, damageDealtRight, damageDealtLeft < damageDealtRight));

  res.json(results);
});

function randomDamage() {
  return Math.floor(Math.random() * 20000) % 2000;
}

/**
 * @class
 */
function FightResult(avatarId, damageDealt, winner) {
  this.avatarId = avatarId;
  this.damageDealt = damageDealt;
  this.winner = winner;
}

module.exports = router;
