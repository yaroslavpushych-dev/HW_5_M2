'use strict';

/**
 * @param {number} myRating
 * @param {number} oppRating
 * @returns {number}
 */

function validator(val1, val2) {
    return (
        typeof val1 === 'number' &&
        typeof val2 === 'number' &&
        Number.isFinite(val1) &&
        Number.isFinite(val2) &&
        val1 >= 0 &&
        val2 >= 0
    );
}

function calculateRating(myRating, oppRating) {
    const validResult = validator(myRating, oppRating);
    if (!validResult) return NaN;

    if (oppRating === 0) return Number(myRating.toFixed(1));
    if (myRating === 0) return Number(oppRating.toFixed(1));

    const ratingDifference = myRating - oppRating;
    let newRate = myRating;

    if (myRating >= oppRating) {
        if (ratingDifference <= 2)
            newRate += 2;
        else if (ratingDifference < 20)
            newRate += 1;
    }
    else 
        newRate += (oppRating - myRating + 5) / 3;

    return Number(newRate.toFixed(1));
}

console.log(calculateRating(50, 49));
console.log(calculateRating(30, 49));
console.log(calculateRating(0, 25));
console.log(calculateRating(40, 0));
console.log(calculateRating(30, 50));