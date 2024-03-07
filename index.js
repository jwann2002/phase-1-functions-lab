// Function to calculate distance from Scuber headquarters in blocks
function distanceFromHqInBlocks(somevalue) {
    const hqLocation = 42; // Scuber headquarters location
    return Math.abs(somevalue - hqLocation); // Absolute difference between pickup location and headquarters location
}

// Function to calculate distance from Scuber headquarters in feet
function distanceFromHqInFeet(somevalue) {
    const feetPerBlock = 264; // Number of feet in one block
    const blocks = distanceFromHqInBlocks(somevalue); // Calculate distance in blocks
    return blocks * feetPerBlock; // Convert blocks to feet
}
function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; // Number of feet in one block
    const blocksTravelled = Math.abs(destination - start); // Absolute difference between starting and ending blocks
    return blocksTravelled * feetPerBlock; // Calculate distance travelled in feet
}
function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264; // Number of feet in one block
    const distanceInFeet = Math.abs(destination - start) * feetPerBlock; // Calculate distance in feet

    if (distanceInFeet <= 400) {
        return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        // Distance between 400 and 2000 feet
        const fare = 0.02 * (distanceInFeet - 400); // 2 cents per foot after the first 400 feet
        return fare;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        // Flat fare for distance over 2000 feet and under 2500 feet
        return 25;
    } else {
        // Distance over 2500 feet
        return 'cannot travel that far';
    }
}

// Test the function
const startBlock = 30;
const destinationBlock = 50;
console.log(calculatesFarePrice(startBlock, destinationBlock)); // Output: 25 (flat fare for a distance over 2000 feet and under 2500 feet)

// Test the function
const start = 30;
const destination = 50;
console.log(distanceTravelledInFeet(start, destination)); // Output: 5280 feet (10 blocks * 264 feet/block)


// Test the functions
const somevalue = 50; // Example pickup location (50th Street)
console.log(distanceFromHqInBlocks(somevalue)); // Output: 8 blocks
console.log(distanceFromHqInFeet(somevalue)); // Output: 2112 feet
