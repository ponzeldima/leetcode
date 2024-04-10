/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let memoizedValues = new Map();

    return function(...args) {
        const argsString =  JSON.stringify(args);
        if(memoizedValues.has(argsString)){
            return memoizedValues.get(argsString);
        }

        let result = fn(...args);
        memoizedValues.set(argsString, result);
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */