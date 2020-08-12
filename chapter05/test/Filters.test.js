function filters_values_above_x(arrays, number) {
    return arrays.filter(x => x > number);
}

console.log(filters_values_above_x([1,2,3,10,20,30,100,200,300], 50));