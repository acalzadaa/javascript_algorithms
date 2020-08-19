
function triangle(row, col) {
    //base, col==1 always 1, row==0 or col == 0 always = 0

    if (row <= 0 || col <= 0) {
        return 0;
    }

    if (col == 1) {
        return 1;
    }

    return triangle(row - 1, col - 1) + triangle(row - 1, col);

}

module.exports = { triangle }