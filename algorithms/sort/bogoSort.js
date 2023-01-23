// == Bogo Sort ==
// Sorts an array by checking if the values are sorted sequentially. If not, randomly sort the array and repeat the process. This sorting algorithm is slow and not recommended (for obvious reasons). 
// Runtime: O(n!) 

const testArray = [8, 4, 2, 10, 9, 7, 6, 1, 3, 5];

// Used to track the number of times the loop was run
let functionCount = 0;

function bogoSort(array) {
    let indexCounter = 0;
    while (indexCounter < testArray.length - 1) {
        console.log(functionCount)
        if (testArray[indexCounter] < testArray[indexCounter + 1]) {
            indexCounter++;
            continue;
        } else {
            array.sort((a, b) => 0.5 - Math.random())
            functionCount++;
            indexCounter = 0;
        }
    }
    return array;
}

// Test log
console.log(bogoSort(testArray));