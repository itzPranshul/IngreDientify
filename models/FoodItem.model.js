// models/FoodItem.js

const mongoose = require('mongoose');

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
        amountPer100g: {
            type: Number,
            required: true
        }
    },
    fats: {
        amountPer100g: {
            type: Number,
            required: true
        },
        saturatedFats: {
            type: Number,
            required: true
        },
        transFats: {
            type: Number,
            required: true
        }
    },
    sugars: {
        amountPer100g: {
            type: Number,
            required: true
        }
    },
    fiber: {
        amountPer100g: {
            type: Number,
            required: true
        }
    },
    proteins: {
        amountPer100g: {
            type: Number,
            required: true
        }
    },
    sodium: {
        amountPer100g: {
            type: Number,
            required: true
        }
    },
    preservatives: {
        type: Boolean,
        required: true
    },
    artificialSweeteners: {
        type: Boolean,
        required: true
    },
    artificialColors: {
        type: Boolean,
        required: true
    },
    vitamins: [{
        type: String
    }],
    // New fields for score and rating
    totalScore: {
        type: Number,
        default: 0 // Default to 0 before scoring
    },
    starRating: {
        type: Number,
        default: 3 // Default to 3 stars before scoring
    }
}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('FoodItem', foodItemSchema);
