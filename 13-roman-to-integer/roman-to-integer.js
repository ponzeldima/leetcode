/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let toAdd = 0;
    let toDevide = 0;
    const getNumber = (c) => {
        switch (c) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }

    for(let i = 0; i < s.length; i++){
        const tempNum = getNumber(s[i]);
        if(i <  s.length - 1 && getNumber(s[i + 1]) > tempNum){
            toDevide += tempNum;
        }
        else {
            toAdd += tempNum;
        }
    }

    return toAdd - toDevide;
};