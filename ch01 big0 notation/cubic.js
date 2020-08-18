function exampleCubic(n) {
    for (let index = 0; index < n; index++) {
        console.log(index);
        for (let index2 = 0; index2 < n; index2++) {
            console.log(index2);
            for (let index3 = 0; index3 < n; index3++) {
                console.log(index3);
            }
        }
    }
}

exampleCubic(20);