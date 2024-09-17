// controllers/foodItemController.js

const FoodItem = require('../models/FoodItem.model');
const { calculateHealthScore } = require('../services/healthScoring');

// Controller to add food item
exports.addFoodItem = async (req, res) => {
    try {
        const {
            name, servingSize, calories, fats, sugars, fiber, proteins, sodium,
            preservatives, artificialSweeteners, artificialColors, vitamins
        } = req.body;

        // Create the food item object from request data
        const foodItemData = {
            name,
            servingSize,
            calories: {
                amountPer100g: calories.amountPer100g
            },
            fats: {
                amountPer100g: fats.amountPer100g,
                saturatedFats: fats.saturatedFats,
                transFats: fats.transFats
            },
            sugars: {
                amountPer100g: sugars.amountPer100g
            },
            fiber: {
                amountPer100g: fiber.amountPer100g
            },
            proteins: {
                amountPer100g: proteins.amountPer100g
            },
            sodium: {
                amountPer100g: sodium.amountPer100g
            },
            preservatives,
            artificialSweeteners,
            artificialColors,
            vitamins
        };

        // Calculate the health score and star rating
        const { totalScore, starRating } = calculateHealthScore(foodItemData);

        // Add totalScore and starRating to the food item object
        foodItemData.totalScore = totalScore;
        foodItemData.starRating = starRating;

        // Create a new food item document
        const newFoodItem = new FoodItem(foodItemData);

        // Save the food item to the database
        await newFoodItem.save();

        // Send response with only totalScore and starRating
        res.status(201).json({
            totalScore: newFoodItem.totalScore,
            starRating: newFoodItem.starRating
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error while adding the food item',
            error: error.message
        });
    }
};
