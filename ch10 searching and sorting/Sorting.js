function bubbleSort(array) {
    for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
        for (let j = 0; j <= i; j++) {
            if (array[i] < array[j]) {
                swap(array, i, j);
            }
        }
    }
    return array;
}

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {
        let smallest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallest]) {
                smallest = j;
            }
        }

        if (i < smallest) {
            swap(array, i, smallest);
        }
    }
    return array;
}

module.exports = { bubbleSort, selectionSort };