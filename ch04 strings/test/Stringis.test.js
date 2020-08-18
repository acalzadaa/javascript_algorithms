const stringis = require("../Stringis");

test('Testing String CharAt', () => {

    expect(stringis.stringCharAt("hola", 1)).toEqual("o");
    expect(stringis.stringCharAt("hello", 0)).toEqual("h");

});

test('Testing String SubString', () => {

    expect(stringis.stringSubString("hola", 1, 3)).toEqual("ol");
    expect(stringis.stringSubString("hello", 0)).toEqual("hello");

});

test('Testing String Comparison', () => {

    expect(stringis.stringComparison("hola", "hola")).toBe(true);

});

test('Testing String Search', () => {

    expect(stringis.stringSearch("Elemental mi querido Watson", "mi")).toEqual(10);
    expect(stringis.stringSearch("Elemental mi querido Watson", "Watson")).toEqual(21);
    expect(stringis.stringSearch("Elemental mi querido Watson", "tu")).toEqual(-1);


});

test('Testing If String Exists', () => {

    expect(stringis.existsInString("Elemental mi querido Watson", "mi")).toBe(true);
    expect(stringis.existsInString("Elemental mi querido Watson", "Watson")).toBe(true);
    expect(stringis.existsInString("Elemental mi querido Watson", "tu")).toBe(false);

});

test('Testing String Decomposition', () => {

    expect(stringis.stringDecomposition('ma,me,mi,mo,mu', ',')).toEqual(['ma', 'me', 'mi', 'mo', 'mu']);
    expect(stringis.stringDecomposition("ma,me,mi,mo,mu").length).toBe(14);
    expect(stringis.stringDecomposition("mapa")).toEqual(['m', 'a', 'p', 'a']);

});

test('Testing String Replace', () => {

    expect(stringis.stringReplace('buenos dias', 'buenos', 'buenas')).toEqual("buenas dias");
    expect(stringis.stringReplace('buenos dias', 'buenos' )).toEqual('buenos dias');

});

//stringCharAt, stringSubString, stringComparison, stringSearch, existsInString, stringDecomposition, stringReplace