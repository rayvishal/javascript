// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points
function footballPoints(wins, draws, losses) {
    console.log(3 * wins + 1 * draws + 0 * losses)
};
footballPoints(3, 4, 2)