// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
    //console.log(`I'm ${age} years old. Happy birthday to me!`);
//}

//gifts
//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
  //for (let i = 0; i < gifts.length; i++) {
    //console.log(`Wrapped ${gifts[i]} and added a bow!`);
  //}

  //return gifts;
//}

//wrapGifts(gifts);

//function write cards

function writeCards(name, event) {
    const messagesArray = []
    for (let i = 0; i < name.length; i++){
        messagesArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        console.log(`${messagesArray[i]}`);
    };
    return messagesArray;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

// countdown function

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number -= 1;
    }
    return number;
}

countDown(4);
