const snail = require('../PrintSnailArray');

test('Testing read snail array', () => {
    expect(snail.print_array_in_snail_order([[1, 2, 3]])).toEqual([1, 2, 3]);
    expect(snail.print_array_in_snail_order([[1, 2, 3], [4, 5, 6]])).toEqual([1, 2, 3, 6, 5, 4]);
    expect(snail.print_array_in_snail_order([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);

});
