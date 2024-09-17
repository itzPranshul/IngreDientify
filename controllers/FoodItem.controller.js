const FoodItem = require('../models/FoodItem.model');  // Import the FoodItem model

// Controller to add a new food item
const addFoodItem = async (req, res) => {
    try {
        // Get the data from the request body
        const {
            name,
            servingSize,
            calories,
            fats,
            saturatedFats,
            transFats,
            sugars,
            fiber,
            proteins,
            sodium,
            vitamins
        } = req.body;

        // Create a new FoodItem instance
        const newFoodItem = new FoodItem({
            name,
            servingSize,
            calories,
            fats,
            saturatedFats,
            transFats,
            sugars,
            fiber,
            proteins,
            sodium,
            vitamins
        });

        // Save the food item in the database
        const savedFoodItem = await newFoodItem.save();

        // Send a success response with the saved food item
        return res.status(201).json({
            message: 'Food item successfully added',
            data: savedFoodItem
        });
    } catch (error) {
        console.error(error);
        // Send an error response if something goes wrong
        return res.status(500).json({
            message: 'Error while adding the food item',
            error: error.message
        });
    }
};

module.exports = { addFoodItem };
