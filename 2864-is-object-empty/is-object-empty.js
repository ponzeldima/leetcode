/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    const s = JSON.stringify(obj);
    return s === '{}' || s === '[]';
};