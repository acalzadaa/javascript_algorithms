const search = require("../Searching")

test('Testing linear searching', () => {
    let array = [1,2,3,4]
    expect(search.linearSearch(array, 2)).toEqual(true);
    expect(search.linearSearch(array, 5)).toEqual(false);

});

test('Testing binary searching', () => {
    let array = [1,2,3,4]
    expect(search.binarySearch(array, 1)).toEqual(0);
    expect(search.binarySearch(array, 2)).toEqual(1);
    expect(search.binarySearch(array, 5)).toEqual(-1);

});