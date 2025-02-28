const router = require('express').Router();
const DinoController = require('../controllers/Dino.controller');

router
  .get('/', DinoController.getAllDinos)
  .get('/:id', DinoController.getDinoById);

module.exports = router;