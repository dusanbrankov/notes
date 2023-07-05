// Without chaining
export function getVotersCount(ages) {
    const filteredVoters = ages.filter(function(age){
        return age >= 18;
    });
    return filteredVoters.length;
}


// With chaining
export function getVotersCount(ages) {
    return ages.filter(function(age){
        return age >= 18;
    }).length;
}
