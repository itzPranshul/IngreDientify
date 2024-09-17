// services/healthScoring.js

const calculateHealthScore = (foodItem) => {
    const { calories, fats, sugars, fiber, proteins, sodium, preservatives, artificialSweeteners, artificialColors } = foodItem;

    let score = 0;

    // 1. Fat Scoring
    let fatScore = 0;
    if (fats.amountPer100g <= 3) fatScore += 2;
    else if (fats.amountPer100g <= 5) fatScore += 1;
    if (fats.saturatedFats > 1.5) fatScore -= 1;
    if (fats.transFats > 0) fatScore -= 3;

    // 2. Sugar Scoring
    let sugarScore = 0;
    if (sugars.amountPer100g < 5) sugarScore += 2;
    else if (sugars.amountPer100g <= 10) sugarScore += 1;
    else sugarScore -= 2;

    // 3. Fiber Scoring
    let fiberScore = 0;
    if (fiber.amountPer100g >= 3) fiberScore += 2;
    else if (fiber.amountPer100g >= 1) fiberScore += 1;

    // 4. Sodium Scoring
    let sodiumScore = 0;
    if (sodium.amountPer100g < 150) sodiumScore += 2;
    else if (sodium.amountPer100g > 300) sodiumScore -= 2;

    // 5. Calorie Scoring
    let calorieScore = 0;
    if (calories.amountPer100g < 200) calorieScore += 1;

    // 6. Artificial Additives Deduction
    let additiveScore = 0;
    if (preservatives) additiveScore -= 2;
    if (artificialSweeteners) additiveScore -= 2;
    if (artificialColors) additiveScore -= 1;

    // 7. Bonus Points for Positive Nutrients
    let bonusScore = 0;
    if (proteins.amountPer100g > 10) bonusScore += 2;
    if (foodItem.vitamins && foodItem.vitamins.length > 0) {
        bonusScore += foodItem.vitamins.length; // +1 point for each vitamin
    }

    // 8. Weighted Scores
    const totalScore = 
        (fatScore * 0.25) +
        (sugarScore * 0.25) +
        (fiberScore * 0.15) +
        (sodiumScore * 0.15) +
        (additiveScore * 0.10) +
        (calorieScore * 0.10) + 
        bonusScore;

    // 9. Normalize to Star Rating (1 to 5 stars)
    let starRating = 3; // Default to 3 stars
    if (totalScore > 8) starRating = 5;
    else if (totalScore > 5) starRating = 4;
    else if (totalScore > 0) starRating = 3;
    else if (totalScore > -3) starRating = 2;
    else starRating = 1;

    return {
        totalScore: totalScore.toFixed(2), // Raw score (for reference)
        starRating // Final star rating (1 to 5 stars)
    };
};

module.exports = { calculateHealthScore };
