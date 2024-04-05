/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let isGood = false;
    let l = 0;
    while (!isGood) {
        isGood = true;
        for (let i = l; i < s.length - 1; i++) {
            if (s[i] != s[i + 1] && s[i].toLowerCase() == s[i + 1].toLowerCase()) {
                s = s.slice(0, i) + s.slice(i + 2);
                isGood = false;
                l = (i || 1) - 1
                break;
            }
        }
    }
    return s;
};