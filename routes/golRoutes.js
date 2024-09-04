const express = require('express');
const router = express.Router();

const golController = require('../controller/golController');
router.get('/', golController.getGoals);
router.post('/', golController.postGoals);

router.get('/', (req, res) => {
  res.send('Get Routes Succes');
});

router.post('/', (req, res) => {
  res.send('Post Routes Succes');
});

module.exports = router;