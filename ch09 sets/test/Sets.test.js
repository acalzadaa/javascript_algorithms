const sets = require("../Sets")

test('Testing sets insert', () => {
    let exampleSet = new Set();
    exampleSet.add(1);
    expect(exampleSet.size).toEqual(1);
    exampleSet.add(1);
    expect(exampleSet.size).toEqual(1);
    exampleSet.add(2);
    expect(exampleSet.size).toEqual(2);
});

test('Testing sets delete', () => {
    let exampleSet = new Set();
    exampleSet.add(1);
    expect(exampleSet.size).toEqual(1);
    exampleSet.delete(1);
    expect(exampleSet.size).toEqual(0);
    exampleSet.add(1);
    expect(exampleSet.size).toEqual(1);
});

test('Testing sets contains', () => {
    let exampleSet = new Set();
    exampleSet.add(1);
    expect(exampleSet.has(1)).toEqual(true);
    expect(exampleSet.has(2)).toEqual(false);

    exampleSet.add(2);
    expect(exampleSet.has(1)).toEqual(true);
    expect(exampleSet.has(2)).toEqual(true);
});

test('Testing sets intersection', () => {
    let setA = new Set([1, 2, 3, 4]), setB = new Set([2, 3])
    expect(sets.intersectSets(setA, setB)).toEqual(new Set([2, 3]));

});

test('Testing sets isSuperset', () => {
    let setA = new Set([1, 2, 3, 4]), setB = new Set([2, 3]), setC = new Set([5])
    expect(sets.isSuperset(setA, setB)).toEqual(true);
    expect(sets.isSuperset(setA, setC)).toEqual(false);

});

test('Testing sets union', () => {
    let setA = new Set([1, 2, 3, 4]), setB = new Set([2, 3]), setC = new Set([5])
    expect(sets.unionSet(setA, setB)).toEqual(new Set([1, 2, 3, 4]));
    expect(sets.unionSet(setA, setC)).toEqual(new Set([1, 2, 3, 4, 5]));

});

test('Testing sets difference', () => {
    let setA = new Set([1, 2, 3, 4]), setB = new Set([2, 3]), setC = new Set([1, 2, 5])
    expect(sets.differenceSet(setA, setB)).toEqual(new Set([1, 4]));
    expect(sets.differenceSet(setA, setC)).toEqual(new Set([3, 4]));

});

test('Testing sets duplicates', () => {
    let arrA = [1, 2, 3, 4], arrB = [2, 2, 3], arrC = [5]
    expect(sets.checkDuplicates(arrA)).toEqual(false);
    expect(sets.checkDuplicates(arrB)).toEqual(true);
    expect(sets.checkDuplicates(arrC)).toEqual(false);

});

test('Testing sets uniques', () => {
    let arrA = [1, 2, 3, 4], arrB = [2, 2, 3, 1], arrC = [2, 4, 5]
    expect(sets.uniqueList(arrA, arrB)).toEqual([1, 2, 3, 4]);
    expect(sets.uniqueList(arrA, arrC)).toEqual([1, 2, 3, 4, 5]);


});