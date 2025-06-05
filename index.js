// Returns the first two drivers from the passed-in array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Returns the last two drivers from the passed-in array
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Array containing the above two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Returns a function that multiplies a fare by the given integer
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

// Doubles the fare
const fareDoubler = createFareMultiplier(2);

// Triples the fare
const fareTripler = createFareMultiplier(3);

// Returns either the first two drivers or the last two drivers, depending on the function passed in
function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}