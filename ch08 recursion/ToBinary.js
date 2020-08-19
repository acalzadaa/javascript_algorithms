function ConvertionOfDecimalToBinary(n) {
    let binaryString = "";

    function binary(n) {
        if (n == 0) {
            binaryString += n;
            return;
        }

        if (n == 1) {
            binaryString += n;
            return;
        }

        binary(Math.floor(n / 2));
        binary(n % 2);
    }

    binary(n);
    return binaryString;
}

module.exports = { ConvertionOfDecimalToBinary }