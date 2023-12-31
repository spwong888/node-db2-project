const express = require('express');
const carsRouter = require('./cars-router');
const Car = require('./cars-model');
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require('./cars-middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const cars = await Car.getAll();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', checkCarId, async (req, res, next) => {
    res.json('posting new car');
  });

  router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
    try {
      const newCar = await Car.create(req.body);
      res.json(newCar); 
    } catch (err) {
      next(err);
    }
  });

module.exports = router;