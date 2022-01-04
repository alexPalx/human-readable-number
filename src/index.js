module.exports = function toReadable(number) {
    if (number === 0) return 'zero';
    const arrayOfOnes = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arrayOfTens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const arrayOfNumbersFrom11To19 = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numberString = number.toString();
    const numberLength = numberString.length;

    let readableNumber = [];
    
    if (numberLength > 0)
        readableNumber[2] = arrayOfOnes[+numberString[numberString.length - 1]];
    if (numberLength > 1) {
        if (numberString[numberString.length - 2] === '1' && numberString[numberString.length - 1] !== '0') {
            readableNumber[1] = arrayOfNumbersFrom11To19[+numberString[numberString.length - 1]];
            readableNumber[2] = '';
        }
        else
            readableNumber[1] = arrayOfTens[+numberString[numberString.length - 2]];
    }
    if (numberLength > 2)
        readableNumber[0] = `${arrayOfOnes[+numberString[numberString.length - 3]]} hundred`;
    
    return readableNumber.filter(item => item != '').join(' ').trim();
}
