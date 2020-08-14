function createMatrix(rows, columns,) {
    return Array(rows).fill(-1).map(x => Array(columns).fill(-1))
}

module.exports = { createMatrix };