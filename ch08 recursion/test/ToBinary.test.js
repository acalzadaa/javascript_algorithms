const binary = require('../ToBinary');

test('Testing recursion', () => {

    expect(binary.ConvertionOfDecimalToBinary(0)).toEqual('0');
    expect(binary.ConvertionOfDecimalToBinary(1)).toEqual('1');
    expect(binary.ConvertionOfDecimalToBinary(2)).toEqual('10');
});