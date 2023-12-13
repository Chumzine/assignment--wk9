// Assignment
// Build a simple loop, inside a function, that takes an array and prints the value of the array to the console.

function runLoop() {
    const vehicles = ['mercedes', 'honda', 'peugeot', 'kia', 'volvo', 'bmw', 'toyota'];

    for (let i=0; i < vehicles.length; i++) {
        console.log(vehicles[i]);
    }
}
runLoop();