const startButton = document.querySelector("button")
const h1 = document.querySelector('h1')
winningImage = document.querySelector("img")


startButton.addEventListener("click", () => {
    const newText = game();
    h1.innerText = newText;
    winningImage.src = "https://media.istockphoto.com/vectors/first-prize-gold-trophy-iconprize-gold-trophy-winner-first-prize-vector-id1183252990?k=20&m=1183252990&s=612x612&w=0&h=BNbDi4XxEy8rYBRhxDl3c_bFyALnUUcsKDEB5EfW2TY=";
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
        prompt("You have Quit")
    } else {
        return `Congrats, you are Correct! It took you ${attempts} guesses`;
    }
}



