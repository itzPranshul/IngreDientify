const mongoose = require('mongoose');

// Define the Nutrient schema
const nutrientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amountPer100g: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    }
}, { _id: false });  // _id is false because we don't need an ID for each nutrient

// Define the FoodItem schema
const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    servingSize: {
        type: Number,
        required: true
    },
    calories: {
        type: nutrientSchema,
        required: true
    },
    fats: {
        type: nutrientSchema,
        required: true
    },
    saturatedFats: {
        type: nutrientSchema,
        required: true
    },
    transFats: {
        type: nutrientSchema,
        required: true
    },
    sugars: {
        type: nutrientSchema,
        required: true
    },
    fiber: {
        type: nutrientSchema,
        required: true
    },
    proteins: {
        type: nutrientSchema,
        required: true
    },
    sodium: {
        type: nutrientSchema,
        required: true
    },
    vitamins: {
        type: [nutrientSchema],
        required: true
    }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('FoodItem', foodItemSchema);
