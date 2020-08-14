const exercise1 = require('../Exercises1');

test('Testing find 2 numbers that sum a value... else return -1', () => {
    expect(exercise1.find_two_values_that_sum_to_a_value([1,2,3,4,5,6,7,8,9,10], 1)).toEqual([-1]);
    expect(exercise1.find_two_values_that_sum_to_a_value([1,2,3,4,5,6,7,8,9,10], 3)).toEqual([[1,2]]);
    expect(exercise1.find_two_values_that_sum_to_a_value([1,2,3,4,5,6,7,8,9,10], 4)).toEqual([[1,3]]);
});

test('Testing create a slice function from scratch', () => {
    expect(exercise1.slice_function_from_scratch([1,2,3,4,5,6,7,8,9,10], 1,5)).toEqual([2,3,4,5,6]);
    expect(exercise1.slice_function_from_scratch([1,2,3,4,5,6,7,8,9,10], 0,5)).toEqual([1,2,3,4,5,6]);
    expect(exercise1.slice_function_from_scratch([1,2,3,4,5,6,7,8,9,10], 5,8)).toEqual([6,7,8,9]);
});


test('Testing create a slice function from scratch', () => {
    expect(exercise1.find_the_median([1,2,3,4])).toEqual(2.5);
    expect(exercise1.find_the_median([1,2,3])).toEqual(0);
    expect(exercise1.find_the_median([1,2,3,4,5,6,7,8,9,10])).toEqual(5.5);
});