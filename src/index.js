module.exports = function toReadable (number) {
    const little = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const overtwenty = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 20){
        return little[number];
    } else if (number < 100) {
        return overtwenty[Math.floor(number / 10)] + (number % 10 === 0 ? '' : ' ' + little[number % 10]);
    } else {
        return little[Math.floor(number / 100)] + ' hundred' + (number % 100 === 0 ? '' : ' ' + toReadable(number % 100));
    }
}
