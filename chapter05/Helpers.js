function slice(arrays, begin, end) {
    let return_value = [];
    return_value = arrays.slice(begin, end);
    return return_value;
}

module.exports = {slice};