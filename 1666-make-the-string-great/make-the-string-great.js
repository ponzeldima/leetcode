/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    // let isGood = false;
    while (true) {
        let isGood = true;
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] != s[i + 1] && s[i].toLowerCase() == s[i + 1].toLowerCase()) {
                s = s.slice(0, i) + s.slice(i + 2);
                isGood = false;
                break;
            }
        }
        if(isGood){
            break;
        }
    }
    return s;
};