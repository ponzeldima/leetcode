/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let isGood = false;
    while (!isGood) {
        isGood = true;
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] != s[i + 1] && s[i].toLowerCase() == s[i + 1].toLowerCase()) {
                // sArray = Array.from(s).filter((_, index) => index != i && index != i + 1).join('');
                s = s.slice(0, i) + s.slice(i + 2);
                isGood = false;
                break;
            }
        }
    }
    return s;
};