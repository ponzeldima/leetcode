/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let isGood = false;
    let sArray =  Array.from(s);
    while (!isGood) {
        isGood = true;
        for (let i = 0; i < sArray.length - 1; i++) {
            if (sArray[i] != sArray[i + 1] && sArray[i].toLowerCase() == sArray[i + 1].toLowerCase()) {
                sArray = sArray.filter((_, index) => index != i && index != i + 1);
                isGood = false;
                break;
            }
        }
    }
    return sArray.join('');
};