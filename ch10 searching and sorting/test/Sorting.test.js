const sort = require("../Sorting")

let array = [4,1,3,2]

test('Testing bubble sorting', () => {
    expect(sort.bubbleSort(array)).toEqual([1,2,3,4]);

});

test('Testing bubble sorting', () => {
    expect(sort.selectionSort(array)).toEqual([1,2,3,4]);

});

test('Testing insertion sorting', () => {
    expect(sort.insertionSort(array)).toEqual([1,2,3,4]);

});

test('Testing quicksort', () => {
    expect(sort.quickSort(array)).toEqual([1,2,3,4]);

});