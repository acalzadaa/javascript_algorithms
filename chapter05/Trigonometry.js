function calculate_angle_between_two_points(ax, ay, bx, by) {

    let x_direction = bx - ax;
    let y_direction = by - ay;

    let angleRad = Math.atan((y_direction) / (x_direction));
    let angleDeg
    if (x_direction >= 0 && y_direction >= 0) {
        angleDeg = angleRad * 180 / Math.PI;
    } else {
        if (x_direction < 0 && y_direction >= 0) {
            angleDeg = 180 + angleRad * 180 / Math.PI;
        }

        if (x_direction >= 0 && y_direction < 0) {
            angleDeg = 360 + angleRad * 180 / Math.PI;
        }
    }
    return (angleDeg);
}

function rotation(originDegrees, rotationDegrees) {
    let returnValue = {};
    returnValue["y"] = sin_rounded(degrees_to_radians(originDegrees) + degrees_to_radians(rotationDegrees));
    returnValue["x"] = cos_rounded(degrees_to_radians(originDegrees) + degrees_to_radians(rotationDegrees));
    return returnValue;
}


function degrees_to_radians(degree) {
    return degree * (Math.PI / 180);
}

function sin_rounded(radians) {
    return Math.abs(Math.sin(radians)) < Number.EPSILON ? 0 : Math.sin(radians);
}

function cos_rounded(radians) {
    return Math.abs(Math.cos(radians)) < Number.EPSILON ? 0 : Math.cos(radians);
}

module.exports = { rotation, sin_rounded, cos_rounded, calculate_angle_between_two_points, degrees_to_radians };
