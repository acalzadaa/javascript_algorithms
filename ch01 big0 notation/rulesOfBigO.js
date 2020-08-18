/*  Coefficient Rule: “Get Rid of Constants” 
    If f(n) is O(g(n)), then kf(n) is O(g(n)), for any constant k > 0. */

function a(n) {
    console.log("First Test!: \n");

    let count = 0;
    for (let i = 0; i < n; i++) {
        count += 1;
        console.log(count);
    }
    return count;
}

a(9);

function a2(n) {
    console.log("Second Test!: \n");

    let count = 0;
    for (let i = 0; i < n * 2; i++) {
        count += 1;
        console.log(count);
    }
    return count;
}

a2(9);

/*  Sum Rule: “Add Big-Os Up” 
    If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n)).
    
    O(n) = n+5n = 6n = n */

function b(n) {
    let count = 0;
    /* O(n)=n */
    for (let i = 0; i < n; i++) {
        count += 1;
    }

    /* O(n)=5n */
    for (let i = 0; i < 5 * n; i++) {
        count += 1;
    }
}


/*  Product Rule: “Multiply Big-Os”
    If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n)).

    O(n) = n * 5n = 5n^2 = n^2 */

function a(n) {
    let count = 0;
    for (let index = 0; index < n; index++) {
        count += 1;
        for (let index2 = 0; index2 < 5 * n; index2++) {
            count += 1;
        }

    }
    return count;
}

/*  Polynomial Rule: "Big-O to the Power of k"
    If f(n) is a polynomial of degree k, then f(n) is O(nk).

    O(n)= n * n = n^2
*/

function a(n) {
    let count = 0;
    for (let i = 0; i < n * n; n++) {
        count += 1;
    }
    return count;
}