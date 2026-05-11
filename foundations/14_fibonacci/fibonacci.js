const fibonacci = function(index) {
    if (isNaN(parseInt(index))) return 0;

    index = Number(index);

    if (index < 0) return "OOPS";
    if (index === 0) return 0;

    const sequence = [1, 1];

    for (let i = 2; i < index; i++)
    {
        sequence.push(sequence[i - 2] + sequence[i - 1]);
    }

    return sequence[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
