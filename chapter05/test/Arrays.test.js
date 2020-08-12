const arrays = require('../Arrays'); 

test('testing arrays', () => {
    expect(arrays.insertion(['a'])).toBe(1); 
});

test('testing delete pop', () => {
    expect(arrays.deletion_pop(['a', 'b', 'c'])).toBe('c'); 
});

test('testing delete shift', () => {
    expect(arrays.deletion_shift(['a', 'b', 'c'])).toBe('a'); 
});

test('testing access', () => {
    expect(arrays.access(['a', 'b', 'c'],0)).toBe('a');
    expect(arrays.access(['a', 'b', 'c'],1)).toBe('b'); 
    expect(arrays.access(['a', 'b', 'c'],2)).toBe('c'); 
});