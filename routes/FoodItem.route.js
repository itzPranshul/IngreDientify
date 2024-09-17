const express = require('express');
const { addFoodItem } = require('../controllers/FoodItem.controller');  // Import the controller function
const router = express.Router();

// POST route to add a new food item
router.post('/addFoodItem', addFoodItem);

module.exports = router;
