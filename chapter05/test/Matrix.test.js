const matrix = require('../Matrix');

test('Testing matrix create', () => {
    expect(matrix.createMatrix(3,3)).toEqual([ [ -1, -1, -1 ], [ -1, -1, -1 ], [ -1, -1, -1 ] ]);
});

