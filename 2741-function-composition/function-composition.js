/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let tempFunc = functions.shift();
    return function(x) {
        if(tempFunc){

            return tempFunc(compose(functions)(x));
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */