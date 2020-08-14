const snail = require('../Matrix');

test('Testing matrix create', () => {
    expect(snail.create_matrix(3,3)).toEqual([ [ -1, -1, -1 ], [ -1, -1, -1 ], [ -1, -1, -1 ] ]);
});

test('Testing read array row', () => {
    expect(snail.read_an_array_row([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0)).toEqual([1, 2, 3]);
    expect(snail.read_an_array_row([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)).toEqual([4, 5, 6]);
    expect(snail.read_an_array_row([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2)).toEqual([7, 8, 9]);

});

test('Testing read array row with limits', () => {
    expect(snail.read_an_array_row_with_limits([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0,0,2)).toEqual([1, 2, 3]);
    expect(snail.read_an_array_row_with_limits([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1,0,1)).toEqual([4, 5]);
    expect(snail.read_an_array_row_with_limits([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2,1,2)).toEqual([8, 9]);

});

test('Testing read array column', () => {
    expect(snail.read_an_array_column([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0)).toEqual([1, 4, 7]);
});

test('Testing read array column with limits', () => {
    expect(snail.read_an_array_column_with_limits([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0, 0, 1)).toEqual([1, 4]);
});