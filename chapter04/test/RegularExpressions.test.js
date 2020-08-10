const regexpressions = require("../RegularExpressions");

test('Testing Regex ANY NUMERIC CHARS', () => {
    let reg = /\d+/;
    expect(reg.test("123")).toEqual(true);
    expect(reg.test("12abcde")).toEqual(true);
    expect(reg.test("1abcdef")).toEqual(true);
    expect(reg.test("abcdef1")).toEqual(true);
    expect(reg.test("2abcdef")).toEqual(true);
    expect(reg.test("abcdef")).toEqual(false);

});

test('Testing Regex ONLY NUMERIC CHARS', () => {
    let reg = /^\d+$/;
    expect(reg.test("123")).toEqual(true);
    expect(reg.test("12abcde")).toEqual(false);
    expect(reg.test("1abcdef")).toEqual(false);
    expect(reg.test("abcdef1")).toEqual(false);
    expect(reg.test("2abcdef")).toEqual(false);
    expect(reg.test("abcdef")).toEqual(false);

});


test('Testing Regex ONLY FLOATING NUMBERS', () => {
    let reg = /^[0-9]*\.{1}[0-9]*[1-9]+$/
    expect(reg.test("12.12")).toEqual(true);
    expect(reg.test("12a.12")).toEqual(false);
    expect(reg.test("12")).toEqual(false);
    expect(reg.test("abcde")).toEqual(false);
    expect(reg.test("1212")).toEqual(false);
    expect(reg.test("012.")).toEqual(false);

});

test('Testing Regex ONLY ALPHANUMERIC CHARACTERS', () => {
    let reg = /^[a-zA-Z0-9]*$/
    expect(reg.test("12.12")).toEqual(true);
    expect(reg.test("12a.12")).toEqual(false);
    expect(reg.test("12")).toEqual(false);
    expect(reg.test("abcde")).toEqual(false);
    expect(reg.test("1212")).toEqual(false);
    expect(reg.test("012.")).toEqual(false);

});