for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey") // Only "Chicken" will appear
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey") // Only "monkey" will appear
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken") // Only "ChickenMonkey" will appear
    } else {
        console.log(currentNumber) // Only the current number will appear
    }

}