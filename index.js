
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
