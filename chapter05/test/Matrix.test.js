function Matrix(rows, columns) {
    var jaggedarray = new Array(rows);
    for (var i = 0; i < columns; i += 1) {
        jaggedarray[i] = new Array(rows);
    }
    return jaggedarray;
}

let matrix = Matrix(3, 3);

console.log(matrix);

matrix[0][0]=-1;
matrix[0][1]=-1;
matrix[0][2]=-1;
matrix[1][0]=-1;
matrix[1][1]=-1;
matrix[1][2]=-1;
matrix[2][0]=-1;

console.log(matrix);
