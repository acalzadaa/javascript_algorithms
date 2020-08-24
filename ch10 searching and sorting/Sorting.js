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

function insertionSort(items) {
    let len = items.length, value, i, j;

    for (i = 0; i < len; i++) {
        value = items[i];

        for (j = i - 1; j > -1 && items[j] > value; j--) {
            items[j + 1] = value;
        }
    }
    return items;
}

function quickSort(items) {
    return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);

        if (left < index - 1) {
            quickSortHelper(items, left, index - 1);
        }

        if (index < right) {
            quickSortHelper(items, index, right);
        }
    }
    return items;
}

function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)];
    while (left <= right) {
        while (pivot > array[left]) {
            left++;
        }
        while (pivot < array[right]) {
            right--;
        }
        if (left <= right) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}

module.exports = { bubbleSort, selectionSort, insertionSort, quickSort };