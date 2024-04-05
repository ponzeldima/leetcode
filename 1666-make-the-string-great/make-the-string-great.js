/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let isGood = false;

    while (!isGood) {
        isGood = true;
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i].toLowerCase() != s[i + 1].toLowerCase()) {
                continue;
            }

            let isOneUpperAndOneLover = 
                (s[i].toLowerCase() == s[i] && s[i + 1].toUpperCase() == s[i + 1]) 
                || (s[i].toUpperCase() == s[i] && s[i + 1].toLowerCase() == s[i + 1]);

            if (!isOneUpperAndOneLover) {
                continue;
            }

            s = Array.from(s).filter((_, index) => index != i && index != i + 1).join('');
            isGood = false;
            break;
        }
    }
    return s;
};