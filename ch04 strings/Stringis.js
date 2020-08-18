function stringCharAt(value, index) {
    return value.charAt(index);
}

function stringSubString(value, start, end) {
    if (end === undefined) {
        return value.substring(start);
    } else {
        return value.substring(start, end);
    }
}

function stringComparison(strOne, strTwo) {
    return true;
}

function stringSearch(strSource, searchStr) {
    return strSource.indexOf(searchStr);
}

function existsInString(stringValue, searchValue) {
    return -1 !== stringValue.indexOf(searchValue);
}

function stringDecomposition(bigString, separator) {
    return separator === undefined ? bigString.split("") : bigString.split(separator);
}

function stringReplace(sourceStr, searchStr, replaceStr){
    return (replaceStr === undefined || searchStr === undefined)  ? sourceStr : sourceStr.replace(searchStr, replaceStr)
}

module.exports = { stringCharAt, stringSubString, stringComparison, stringSearch, existsInString, stringDecomposition, stringReplace } 
