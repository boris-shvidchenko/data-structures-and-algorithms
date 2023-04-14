// == Grid Traveler ==
// Given a 2d graph of x by y, how many ways can someone travel from the top left corner of the grid to the bottom corner of the grid, considering that you can only travel down or right?

// One way that works but slows down on larger grid sizes is the method shown below.
function gridTraveler1(x,y) {
    // Base Case 1: Only 1 way to travel on a 1x1 grid
    if (x === 1 && y === 1) return 1;
    // Base Case 2: If no rows or columns exist, a grid doesn't exist
    if (x === 0 || y === 0) return 0;
    return gridTraveler1(x - 1, y) + gridTraveler1(x, y - 1); 
}

// A better approach is to use memoization to store similar outcomes of a potential grid traversal.
function gridTraveler2(x,y, memo = {}) {
    // Check to see if a specified path already exists in our memo object
    const key = x + ',' + y;
    if (key in memo) return memo[key];
    if (x === 1 && y === 1) return 1;
    if (x === 0 || y === 0) return 0;
    memo[key] = gridTraveler2(x - 1, y, memo) + gridTraveler2(x, y - 1, memo); 
    return memo[key];
}

// Test
console.log(gridTraveler2(20, 20));