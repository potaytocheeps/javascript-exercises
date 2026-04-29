const sumAll = function(start, end) {
    if (start < 0 || end < 0) return "ERROR";
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";

    let sum = 0;

    if (start > end)
    {
        [start, end] = [end, start];
    }

    for (let current = start; current <= end; current++)
    {
        sum += current;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
