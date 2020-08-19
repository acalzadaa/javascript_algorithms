function fibonacci(n){

    //0,1
    //base, stop when n <= 1
    if(n <= 1){
        return n;
    } else {
        return fibonacci(n-1)+ fibonacci(n-2)
    }
}

module.exports = {fibonacci}