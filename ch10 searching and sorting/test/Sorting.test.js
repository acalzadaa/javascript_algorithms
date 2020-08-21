const sort = require("../Sorting")

test('Testing bubble sorting', () => {
    let array = [4,1,3,2]
    expect(sort.bubbleSort(array)).toEqual([1,2,3,4]);

});
