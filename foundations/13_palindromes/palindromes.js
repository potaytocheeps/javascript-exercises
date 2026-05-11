const palindromes = function (text = "") {
    text = text.toLowerCase();

    const textArray = text.split('');

    let filteredTextArray = textArray.filter(letter => (letter >= "a" && letter <= "z") || Number.isInteger(+letter));
    filteredTextArray = filteredTextArray.filter(letter => letter !== ' ');

    const filteredText = filteredTextArray.join('');
    const filteredTextReversed = [...filteredTextArray].reverse().join('');

    return filteredText === filteredTextReversed;
};

// Do not edit below this line
module.exports = palindromes;
