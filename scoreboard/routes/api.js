const express = require('express');
const router = express.Router();
const Scores = require('../modules/scores');
const WSapi = require('../modules/wsapi');

router.get('/', (req, res) => {
  console.log("Ping received");
  res.send('');
});

router.get('/ws-config', (req, res) => {
  res.send(
    WSapi.getConfig()
  );
});

router.post('/score', (req, res) => {
  console.log(`Adding score: [${req.body.score.player} - ${req.body.score.points} points]`);
  const gameId = req.body.gameId;
  const score = req.body.score;
  res.send({
    position: Scores.addScore(gameId, score)
  });
});

module.exports = router;
