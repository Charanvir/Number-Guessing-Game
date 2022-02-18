let maximum = parseInt(prompt("Enter A Maximum Number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter A Valid Number"));
}



const target = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("Enter Your Guess"));
let attempts = 1;


while (parseInt(guess) !== target) {
    if (guess === "quit") break;
    attempts++;
    if (guess > target) {
        guess = prompt("Too High");
    } else {
        guess = prompt("Too Low")
    }
}
if (guess === "quit") {
    prompt("You have Quit")
} else {
    prompt(`Congrats, you are Correct! It took you ${attempts} guesses`);
}

