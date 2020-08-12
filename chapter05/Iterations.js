//cycles properties from an object
function for_in(arrays) {
    let return_value = [];
    for (let index in arrays) {
        return_value.push(index);
    }
    return return_value;
}

//cycles the elements of an iterable string or array
function for_of(word) {
    let return_value = [];
    for (let char of word) {
        return_value.push(char);
    }
    return return_value;
}

function for_each_element(arrays) {
    let return_value = [];
    arrays.forEach((element, index) => {
        return_value.push(element);
    })
    return return_value;
}

function for_each_index(arrays) {
    let return_value = [];
    arrays.forEach((element, index) => {
        return_value.push(arrays[index]);
    })
    return return_value;
}

module.exports = { for_of, for_in, for_each_element, for_each_index };