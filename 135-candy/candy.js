/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if (ratings.length <= 1){
        return 1;
    }

    resArr = [];
    for (let i = 0; i < ratings.length; i ++) {
        resArr[i] = 1;
    }

    resArr[0] = ratings[0] > (ratings[1] ?? 1000000) ? 2 : 1;

    // for (let i = 0; i < ratings.length; i ++) {
        for (let j = 1; j < ratings.length; j ++) {
            // if (j < ratings.length - 1) {
                resArr[j] = ratings[j] >  (ratings[j + 1] ?? 1000000) ? 2 : 1;
            // }

            // if (j > 0) {
                // if(ratings[j] == ratings[j - 1]){
                //     resArr[j] 
                // }
                if(ratings[j] > ratings[j - 1]){
                    resArr[j] = resArr[j - 1] + 1;
                    continue;
                }

                // if (resArr[j - 1] <= 1) {
                    for (let k = j - 1; k >= 0; k--) {
                        if(resArr[k] > resArr[k + 1]){
                            break;
                        }else if(ratings[k] > ratings[k + 1]){
                            resArr[k]++;
                        } else {
                            break;
                        }
                    }
                    // continue;
                // }
            // }
        }
    // }

    return resArr.reduce((sum, current) => current + sum, 0);
};