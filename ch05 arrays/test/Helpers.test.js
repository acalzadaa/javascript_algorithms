const helpers = require('../Helpers'); 

test('Testing slice', () => {
    expect(helpers.slice([1,2,3,4],1,2)).toEqual([2]); 
    expect(helpers.slice([1,2,3,4],1)).toEqual([2,3,4]); 
});

test('Testing array.from', () => {
    let array1 = [1,2,3,4];
    let array2 = array1;
    let array3 = Array.from(array1);
    array1[0] = 99;
    expect(array2[0]).toEqual(99); 
    expect(array3[0]).toEqual(1); 
});

test('Testing splice', () => {
    let array1 = [1,2,3,4];
    expect(array1.splice()).toEqual([]); 
    expect(array1.splice(1,2)).toEqual([2,3]);
});

test('Testing concat', () => {
    let array1 = [1,2,3,4];
    expect(array1.concat()).toEqual([1,2,3,4]); 
    expect(array1.concat([1,2,3])).toEqual([1,2,3,4,1,2,3]); 
});

test('Testing concat', () => {
    let array1 = [1,2,3,4];
    expect(array1.length).toEqual(4); 
});