const startButton = document.querySelector(".sButton");
const h1 = document.querySelector('h1');
winningImage = document.querySelector("img");
const resetButton = document.querySelector(".rButton");


startButton.addEventListener("click", () => {
    const newText = game();
    h1.innerText = newText;
    if (newText === "You have quit the game") {
        winningImage.src = "https://i0.wp.com/positivesharing.com/wp-content/uploads/2008/04/quit.jpg?w=474&ssl=1"
        winningImage.alt = "QUIT"
    } else {
        winningImage.src = "https://media.istockphoto.com/vectors/first-prize-gold-trophy-iconprize-gold-trophy-winner-first-prize-vector-id1183252990?k=20&m=1183252990&s=612x612&w=0&h=BNbDi4XxEy8rYBRhxDl3c_bFyALnUUcsKDEB5EfW2TY=";
        winningImage.alt = "image of a trophy to celebrate you winning the game"
    }
    startButton.disabled = true;
})

resetButton.addEventListener("click", () => {
    const resetText = reset();
    h1.innerText = resetText;
    winningImage.src = "https://media.mixbook.com/images/templates/97_1_0_m.jpg";
    startButton.disabled = false;
})

const game = () => {
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
        return 'You have quit the game'
    } else {
        return `Congrats, you are Correct! It took you ${attempts} guesses`;
    }
}

const reset = () => {
    return "Number Guessing Game!";
}



