/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let isGood = false;
    while (!isGood) {
        isGood = true;
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i].toLowerCase() === s[i + 1].toLowerCase() && s[i] !== s[i + 1]) {
                s = s.slice(0, i) + s.slice(i + 2);
                isGood = false;
                break;
            }
        }
    }
    return s;
};