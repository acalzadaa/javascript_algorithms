function create_matrix(rows, columns) {
    return Array(rows).fill(-1).map(x => Array(columns).fill(-1))
}

function read_an_array_row(numberArray, index) {
    return numberArray[index].reduce((init, curr) => {
        init.push(curr);
        return init;
    }, []);
}

function read_an_array_row_with_limits(numberArray, index, startColumn, endColumn) {
    return read_an_array_row(numberArray,index).slice(startColumn,endColumn + 1);
}

function delete_an_array_row(numberArray, index) {
    return numberArray.slice(0, index).concat(numberArray.slice(index + 1, numberArray.length));
}

function read_an_array_column(numberArray, index) {
    return numberArray.reduce((init, curr) => {
        init.push(curr[index]);
        return init;
    }, []);
}

function read_an_array_column_with_limits(numberArray, columnIndex, startRow, endRow) {
    return numberArray.reduce((init, curr, idx) => {
        if (idx >= startRow && idx <= endRow) {
            init.push(curr[columnIndex]);
        }
        return init;
    }, []);
}

function delete_an_array_column(numberArray, index) {
    return numberArray.reduce((init, curr) => {
        init.push(curr.slice(0, index).concat(curr.slice(index + 1, curr.length)));
        return init;
    }, []);
}

module.exports = { create_matrix, delete_an_array_row, delete_an_array_column, read_an_array_column_with_limits, read_an_array_row_with_limits, read_an_array_row, read_an_array_column };

