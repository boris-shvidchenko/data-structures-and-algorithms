// == Grid Traveler using tabulation ==
// Given a 2d graph of x by y, how many ways can someone travel from the top left corner of the grid to the bottom corner of the grid, considering that you can only travel down or right?

// NOTE: Some return values are incorrect/ocassional errors occur on function call

function gridTravelerTabulation(x,y) {
    const table = Array(x + 1)
        .fill()
        .map(() => Array(y + 1).fill(0)); 
    table[1][1] = 1;
    for (let i = 0; i <= x; i++) {
        for (let j = 0; j <= y; j++) {
            const current = table[i][j];
            if (j + 1 <= x) table[i][j+1] += current;
            if (i + 1 <= y) table[i+1][j] += current;
        }
    }
    return table[x][y];
}

// Test
console.log(gridTravelerTabulation(2,3));
