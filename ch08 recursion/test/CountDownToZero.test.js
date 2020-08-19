const countDown = require('../CountDownToZero'); 

test('Testing recursion', () => {
    expect(countDown.countDownToZero(0)).toEqual(0); 
    expect(countDown.countDownToZero(1)).toEqual(1); 
    expect(countDown.countDownToZero(15)).toEqual(120); 
});