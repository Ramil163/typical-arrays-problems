exports.min = function min(array) {
    if (array === undefined) {
        return 0;
    }

    if (array.length === 0) {
        return 0;
    }
    return Math.min(...array);
};

exports.max = function max(array) {
    if (array === undefined) {
        return 0;
    }

    if (array.length === 0) {
        return 0;
    }
    return Math.max(...array);
};

exports.avg = function avg(array) {
    if (array === undefined) {
        return 0;
    }

    if (array.length === 0) {
        return 0;
    }
    let mid = 0;
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        mid += array[i];
        counter += 1;
    }
    return (midEnd = mid / counter);
};
