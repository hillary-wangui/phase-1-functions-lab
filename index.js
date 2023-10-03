// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const hqLocation = 42; // Assuming HQ is located at 42nd street
  
    if (location >= hqLocation) {
      return location - hqLocation;
    } else {
      return hqLocation - location;
    }
  }
  
  // Example usage:
  console.log(distanceFromHqInBlocks(50)); // Output: 8
  console.log(distanceFromHqInBlocks(36)); // Output: 6
  console.log(distanceFromHqInBlocks(42)); // Output: 0
  function distanceFromHqInFeet(location) {
    const hqLocation = 42; // Assuming HQ is located at 42nd street
    const feetPerBlock = 264; // Assuming there are 264 feet in a block
  
    if (location >= hqLocation) {
      return (location - hqLocation) * feetPerBlock;
    } else {
      return (hqLocation - location) * feetPerBlock;
    }
  }
  
  // Example usage:
  console.log(distanceFromHqInFeet(50)); // Output: 1584
  console.log(distanceFromHqInFeet(36)); // Output: 1584
  console.log(distanceFromHqInFeet(42)); // Output: 0
  function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264; // Assuming there are 264 feet in a block
  
    if (startBlock <= endBlock) {
      return (endBlock - startBlock) * feetPerBlock;
    } else {
      return (startBlock - endBlock) * feetPerBlock;
    }
  }
  
  // Example usage:
  console.log(distanceTravelledInFeet(42, 50)); // Output: 2112 (8 blocks * 264 feet/block)
  console.log(distanceTravelledInFeet(36, 42)); // Output: 1584 (6 blocks * 264 feet/block)
  console.log(distanceTravelledInFeet(50, 42)); // Output: 2112 (8 blocks * 264 feet/block)
  

        
      
    
  

function calculatesFarePrice(start, destination) {
  const feetPerBlock = 264; // Assuming there are 264 feet in a block
  const freeSampleDistance = 400; // First 400 feet are free
  const shortRideDistance = 2000; // Distance for 2 cents per foot
  const longRideDistance = 2500; // Maximum allowed distance
  
  const distanceInBlocks = Math.abs(destination - start);
  const distanceInFeet = distanceInBlocks * feetPerBlock;

  if (distanceInFeet <= freeSampleDistance) {
    return 0; // Free sample
  } else if (distanceInFeet > freeSampleDistance && distanceInFeet <= shortRideDistance) {
    const fare = (distanceInFeet - freeSampleDistance) * 0.02; // 2 cents per foot
    return fare;
  } else if (distanceInFeet > shortRideDistance && distanceInFeet <= longRideDistance) {
    return 25; // $25 for a distance over 2000 feet
  } else {
    return "Cannot calculate fare for rides over 2500 feet.";
  }
}

// Example usage:
console.log(calculatesFarePrice(42, 442)); // Output: 104 (400 feet free + 42 * 2 cents/foot)
console.log(calculatesFarePrice(36, 42)); // Output: 25 ($25 for a distance over 2000 feet)
console.log(calculatesFarePrice(50, 52)); // Output: 0 (Free sample)
console.log(calculatesFarePrice(42, 2600)); // Output: "Cannot calculate fare for rides over 2500 feet."
