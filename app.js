const express = require('express');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
const FoodItemRoutes = require('./routes/FoodItem.route')

// Load environment variables from the configs/.env file
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, 'configs/.env') });


const app = express();

const PORT = process.env.PORT || 3000;

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/IngreDientify';
// 'mongodb+srv://pranshulg01:BByIuEIX5TeoN2z7@ingredientify.on2eg.mongodb.net/?retryWrites=true&w=majority&appName=IngreDientify'


console.log(mongoURI);  // Check if it prints correctly

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

app.use(express.json());

app.use('/api/food',FoodItemRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
