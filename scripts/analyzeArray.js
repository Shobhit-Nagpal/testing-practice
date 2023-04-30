const analyzeArray = (arr) => {

    if(!Array.isArray(arr)) {
        return null;
    }

    let sum = 0;

    arr.forEach((num) => {sum += num});

    const average = sum/arr.length;

    const object = {
        'average': average,
        'max': Math.max(...arr),
        'min': Math.min(...arr),
        'length': arr.length
    }
    return object;
}

module.exports = analyzeArray;