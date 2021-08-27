//DAY TRIP GENERATOR
//Random Destinations
   //Fiji, Belize, Sydney, Cabo San Lucas, New Zealand
//Random Restaurants
   //Burger King, Taco Bell, Popeye's, Fudruckers, Smashburger
//Random forms of Transportation
   //Plane, Boat, Teleportaiton, Submarine, Jetpack  
//Random forms of Enertainment
   //Juggling, Fire Eating, Underwater Basket Weaving, Bearded Lady Opera, Gladitorial Combat
//Random Re-select
//Confirm that day trip is "complete" once I like all of the random selections
//Display completed trip in console

//
function getRandomTrip([i]){
    return Math.floor(Math.random() * [i].length);
}

let destination = ["Fiji", "Belize", "Sydney", "Cabo San Lucas", "New Zealand"];
let randomDestination = destination[Math.floor(Math.random() * destination.length)];
console.log(randomDestination);  
//
let restaurant = ["Burger King", "Taco Bell", "Popeye's", "Fudruckers", "Smashburger"];
let randomRestaurant = restaurant[Math.floor(Math.random() * restaurant.length)];
console.log(randomRestaurant);
//
let transportation = ["Plane", "Boat", "Teleportation", "Submarine", "Jet Pack"];
let randomTransportation = transportation[Math.floor(Math.random() * transportation.length)];
console.log(randomTransportation);
//
let entertainment = ["Juggling", "Fire Eating", "Underwater Basket Weaving", "Bearded Lady Opera", "Gladitorial Combat"];
let randomEntertainment = entertainment[Math.floor(Math.random() * entertainment.length)];
console.log(randomEntertainment);

let userInput = prompt("Are you happy with your trip and ready to go?");
if(userInput === "Yes") {
    alert("Here we go!");
}
else if(userInput === "No") {
    alert("No problem, lets see what else is available...");
}