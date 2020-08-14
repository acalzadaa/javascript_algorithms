/*
Let’s create an example problem with a matrix. Given a matrix, print the elements in a spiral
order
*/

const {read_an_array_row,read_an_array_row_with_limits,delete_an_array_row, read_an_array_column, read_an_array_column_with_limits,delete_an_array_column} = require('./Matrix');
const {rotation, calculate_angle_between_two_points} = require('./Trigonometry');

function print_array_in_snail_order(numberArray) {

    //original orientation = 0 degrees
    let counterClockwise = -90;
    let orientation = { "x": 1, "y": 0 }; //right orientation

    //row ranges
    let rowLimit = numberArray.length;
    let rowFence = rowLimit - 1;

    //column ranges
    let columnLimit = numberArray[0].length;
    let columnFence = columnLimit - 1;

    //return value
    let snail = [];

    //is orientation horizontal or vertical?
    while (numberArray.length > 0) {

        //horizontal
        if (1 === Math.abs(orientation["x"])) {

            if (1 === orientation["x"]) {
                snail.push(read_an_array_row_with_limits(numberArray, 0, 0, columnFence));
                numberArray = delete_an_array_row(numberArray, 0);
                rowFence = numberArray.length - 1;
                orientation = rotation(calculate_angle_between_two_points(0,0,orientation["x"], orientation["y"]), counterClockwise);
                continue;
            }

            if (-1 === orientation["x"]) {
                console.log("izquierda");
                snail.push(read_an_array_row_with_limits(numberArray, rowFence, 0, columnFence).reverse());
                numberArray = delete_an_array_row(numberArray, rowFence);
                rowFence = numberArray.length - 1;
                orientation = rotation(calculate_angle_between_two_points(0,0,orientation["x"], orientation["y"]), counterClockwise);
                continue;
            }
        }

        //vertical
        if (1 === Math.abs(orientation["y"])) {
            if (1 === orientation["y"]) {
                snail.push(read_an_array_column_with_limits(numberArray, 0, 0, rowFence).reverse());
                numberArray = delete_an_array_column(numberArray, 0);
                columnFence = numberArray[0].length;
                orientation = rotation(calculate_angle_between_two_points(0,0,orientation["x"], orientation["y"]), counterClockwise);
                continue;
            }

            if (-1 === orientation["y"]) {
                console.log("abajo");
                snail.push(read_an_array_column_with_limits(numberArray, columnFence, 0, rowFence));
                numberArray = delete_an_array_column(numberArray, columnFence);
                columnFence = numberArray[0].length;
                orientation = rotation(calculate_angle_between_two_points(0,0,orientation["x"], orientation["y"]), counterClockwise);
                continue;
            }
        }

    }
    return snail.flat();
}

module.exports = { print_array_in_snail_order };