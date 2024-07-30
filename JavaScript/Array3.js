// Function to calculate the average of numbers in an array
function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

// Function to categorize the average score
function categorizeAverage(average) {
    if (average >= 75) {
        return "High";
    } else if (average >= 50) {
        return "Medium";
    } else {
        return "Low";
    }
}

// Array of scores
let scores = [65, 70, 85, 90, 55, 40];

// Calculate the average score
let average = calculateAverage(scores);

// Categorize the average score
let category = categorizeAverage(average);

// Display the results
console.log("Scores:", scores);
console.log("Average score:", average);
console.log("Category:", category);
