/*

function sin_rounded(radians) {
    return Math.abs(Math.sin(radians)) < Number.EPSILON ? 0 : Math.sin(radians);
}

function cos_rounded(radians) {
    return Math.abs(Math.cos(radians)) < Number.EPSILON ? 0 : Math.cos(radians);
}
*/
const trigonometry = require('../Trigonometry');

test('Testing calculates angle between two points', () => {
    expect(trigonometry.calculate_angle_between_two_points(0, 0, 1, 0)).toEqual(0);
    expect(trigonometry.calculate_angle_between_two_points(0, 0, 1, 1)).toEqual(45);
    expect(trigonometry.calculate_angle_between_two_points(0, 0, 0, 1)).toEqual(90);
    expect(trigonometry.calculate_angle_between_two_points(0, 0, -1, 1)).toEqual(135);
    expect(trigonometry.calculate_angle_between_two_points(0, 0, -1, 0)).toEqual(180);
    expect(trigonometry.calculate_angle_between_two_points(0, 0, 0, -1)).toEqual(270);
    expect(trigonometry.calculate_angle_between_two_points(0, 0, 1, -1)).toEqual(315);
});

test('Testing calculates angle between two points', () => {
    expect(trigonometry.rotation(90, -90)).toEqual({ "x": 1, "y": 0 });
    expect(trigonometry.rotation(180, -90)).toEqual({ "x": 0, "y": 1 });
    expect(trigonometry.rotation(270, -90)).toEqual({ "x": -1, "y": 0 });
    expect(trigonometry.rotation(360, -90)).toEqual({ "x": 0, "y": -1 });

});

test('Testing change degrees to radians', () => {
    expect(trigonometry.degrees_to_radians(0)).toEqual(0);
    expect(trigonometry.degrees_to_radians(90)).toEqual(Math.PI / 2);
    expect(trigonometry.degrees_to_radians(180)).toEqual(Math.PI);
    expect(trigonometry.degrees_to_radians(270)).toEqual(Math.PI + (Math.PI / 2));

});


test('Testing sine with rounding', () => {
    expect(trigonometry.sin_rounded(0)).toEqual(0);
    expect(trigonometry.sin_rounded(Math.PI /2)).toEqual(1);
});

test('Testing cosine with rounding', () => {
    expect(trigonometry.cos_rounded(0)).toEqual(1);
    expect(trigonometry.cos_rounded(Math.PI /2)).toEqual(0);

});
