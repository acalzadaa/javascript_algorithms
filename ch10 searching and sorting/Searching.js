/* searching a unsorted array */
function linearSearch(array, n) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == n) {
            return true;
        }
    }
    return false;
}

/* searching a sorted array */
function binarySearch(array, n) {
    let lowIndex = 0, highIndex = array.length - 1;
    let totalSearches = array.length;

    while (totalSearches > 0 && lowIndex <= highIndex) {

        let midIndex = Math.floor((highIndex - lowIndex) / 2);

        if (totalSearches < 0) {
            break;
        }

        if (array[midIndex] == n) {
            return midIndex;
        } else if (n > array[midIndex]) {
            lowIndex = midIndex;
        } else {
            highIndex = midIndex;
        }

        totalSearches -= 1;
    }
    return -1;
}

module.exports = { linearSearch, binarySearch }