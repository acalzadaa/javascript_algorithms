function reduces_sums_all_values(arrays) {
    return arrays.reduce((init_value, current_value) => {
        return init_value + current_value;
    }, 0)
}

module.exports = {reduces_sums_all_values};