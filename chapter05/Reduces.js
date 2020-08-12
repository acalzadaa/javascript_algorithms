function reduces_sums_all_values(arrays){
    return arrays.reduce((init_value,current_value) => {
        console.log(`init_value: ${init_value} , current_value: ${current_value}`);
        return init_value + current_value;
    }, 0)
}

console.log(reduces_sums_all_values([1,2,4,8,16,32]));