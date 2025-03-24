const age = [10, 25, 9, 18, 45, 12, 5, 34, 25];
const eligible = [];
const notEligible = [];
function eligibleForVote(ages) {
    ages.forEach(age => {
        if (age >= 18) {
            eligible.push(age);
        } else {
            notEligible.push(age);
        }
    });
    return { eligible, notEligible };
}
const result = eligibleForVote(age);
console.log("Eligible for vote:", result.eligible);
console.log("Not eligible for vote:", result.notEligible);