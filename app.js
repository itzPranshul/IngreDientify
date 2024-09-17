const express = require('express');
const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
const FoodItemRoutes = require('./routes/FoodItem.route')

// Load environment variables from the configs/.env file
dotenv.config({ path: './configs/.env' });

console.log('MONGO_URI:', process.env.MONGO_URI);  // Check if it prints correctly



const app = express();

const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/IngreDientify';


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
