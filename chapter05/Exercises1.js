/*
FIND TWO ARRAY ELEMENTS IN AN ARRAY THAT ADD UP TO A NUMBER

Problem: Given the array arr, find and return two indices of the array that add up to weight
or return -1 if there is no combination that adds up to weight.
For example, in an array like [1,2,3,4,5], what numbers add up to 9?
The answers are 4 and 5, of course.
*/

function find_two_values_that_sum_to_a_value(numbersArray, total) {
    return numbersArray.filter(number => number < total).reduce((init, current, index, arrays) => {
        arrays.slice(index).reduce((init2, current2, index2, arrays2) => {
            if (current + current2 == total) {
                if (init[0] == -1) {
                    init.shift();
                }
                init.push([current, current2]);
            }
        })
        return init;
    }, [-1])
}

/*
IMPLEMENT THE ARRAY.SLICE() FUNCTION FROM SCRATCH

Let’s review what the .slice() function does.
.slice() takes two parameters: the beginning index and the last ending index of the array.
It returns a portion of an existing array without modifying the array function arraySlice
(array, beginIndex, endIndex).
*/

function slice_function_from_scratch(stringArray, beginIndex, endIndex) {
    return stringArray.reduce((init, current, index, array) => {
        if (index >= beginIndex && index <= endIndex) {
            init.push(current);
        }

        return init;
    }, [])
}

/*
FIND THE MEDIAN OF TWO SORTED ARRAYS OF THE SAME SIZE

Recall that median in an even number of a set is the average of the two middle numbers.
If the array is sorted, this is simple.
Here’s an example:
[1,2,3,4] has the median of (2+3)/2 = 2.5.
*/

function find_the_median(orderedArray){
    return orderedArray.reduce( (init, current, index, array) => {
        if(array.length % 2 === 0 && index === (array.length / 2) ){
            init = ( (array[index-1] + array[index]) / 2)
        }
        return init;
    },0)
}

module.exports = { find_two_values_that_sum_to_a_value, slice_function_from_scratch, find_the_median };