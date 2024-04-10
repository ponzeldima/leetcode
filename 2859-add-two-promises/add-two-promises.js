/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const r1 = await promise1;
    const r2 = await promise2;

    return r1 + r2;
    return Promise.all([promise1, promise2]).then(([r1, r2]) => r1 + r2);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */