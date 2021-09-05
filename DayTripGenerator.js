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
function getRandomTrip(arrayToGetSelectionFrom){
    let selectionNumber = Math.floor(Math.random() * arrayToGetSelectionFrom.length)
    return arrayToGetSelectionFrom[selectionNumber];
}

let destination = ["Fiji", "Belize", "Sydney", "Cabo San Lucas", "New Zealand"];
let randomDestination = getRandomTrip(destination)
console.log(randomDestination);  
//
let restaurant = ["Burger King", "Taco Bell", "Popeye's", "Fudruckers", "Smashburger"];
let randomRestaurant = getRandomTrip(restaurant);
console.log(randomRestaurant);
//
let transportation = ["Plane", "Boat", "Teleportation", "Submarine", "Jet Pack"];
let randomTransportation = getRandomTrip(transportation);
console.log(randomTransportation);
//
let entertainment = ["Juggling", "Fire Eating", "Underwater Basket Weaving", "Bearded Lady Opera", "Gladitorial Combat"];
let randomEntertainment = getRandomTrip(entertainment);
console.log(randomEntertainment);

let userInput = prompt("Are you happy with your trip and ready to go?");
while(userInput === "no") {
   randomDestination = getRandomTrip(destination);
    console.log(randomDestination);
    randomRestaurant = getRandomTrip(restaurant);
    console.log( randomRestaurant);
    randomTransportation = getRandomTrip(transportation);
    console.log(randomTransportation);
    randomEntertainment = getRandomTrip(entertainment);
    console.log(randomEntertainment);
    userInput = "yes";
} 
console.log("Trip Complete");
 userInput = prompt("Are you happy with your trip now?");
 if(userInput === "no"){
 getRandomTrip(destination);
 console.log(randomDestination);
 getRandomTrip(restaurant);
 console.log( randomRestaurant);
 getRandomTrip(transportation);
 console.log(randomTransportation);
 getRandomTrip(entertainment);
 console.log(randomEntertainment); 
 alert("Okay, maybe we can work out a trip for you some other time")
 userInput = "no"
} else {
   console.log("Trip Complete")
 }

