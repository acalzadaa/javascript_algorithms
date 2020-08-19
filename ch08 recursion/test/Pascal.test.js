const pascal = require('../Pascal');

test('Testing recursion', () => {

    //out of bounds
    expect(pascal.triangle(0,0)).toEqual(0);
    expect(pascal.triangle(0,1)).toEqual(0);
    expect(pascal.triangle(1,0)).toEqual(0);

    //boundaries
    expect(pascal.triangle(1,1)).toEqual(1);

    expect(pascal.triangle(2,1)).toEqual(1);
    expect(pascal.triangle(2,2)).toEqual(1);

    expect(pascal.triangle(3,1)).toEqual(1);
    expect(pascal.triangle(3,2)).toEqual(2);
    expect(pascal.triangle(3,3)).toEqual(1);

    expect(pascal.triangle(4,1)).toEqual(1);
    expect(pascal.triangle(4,2)).toEqual(3);
    expect(pascal.triangle(4,3)).toEqual(3);
    expect(pascal.triangle(4,4)).toEqual(1);


});