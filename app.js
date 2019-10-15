// This project was inspired from Dev Ed Tutoril
// https://www.youtube.com/watch?v=qWPtKtYEsN4

const game = () => {
  //   Since we want to update the scores
  let perScore = 0;
  let compScore = 0;
  const modal = document.querySelector(".modal");

  //   To initialize the game
  const startGame = () => {
    const playButton = document.querySelector(".intro a");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //   To play the actual game
  const playGame = () => {
    const options = document.querySelectorAll(".options button");
    const personHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    // Computer options will be based of random numbers generated
    const computerOptions = ["rock", "paper", "scissors"];

    //Each option is a button to which we add a click event to a funct
    options.forEach(option => {
      option.addEventListener("click", function() {
        // console.log(this);
        // Math.random() function returns a floating-point between 0 and 1
        // Math.floor() will round off the number to nearest downward integer
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Now call the compareHands funct to update the text for winner

          compareHands(this.textContent, computerChoice);
          //To update the hand icons
          personHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        personHand.style.animation = "shakePerson 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  //   To update the score
  const updateScore = () => {
    const personScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    personScore.textContent = perScore;
    computerScore.textContent = compScore;
  };

  //   To check the game hands
  const compareHands = (personChoice, computerChoice) => {
    //   This is to update the text about who won
    const winner = document.querySelector(".winner");
    const tie = "We have a Tie 🤪!";
    const computerWon = "The computer beat you 👻";
    const personWon = "Human player wins 🤩🤴🏿";

    if (personChoice === computerChoice) {
      winner.textContent = tie;
      return;
    } else if (personChoice === "rock") {
      if (computerChoice === "paper") {
        winner.textContent = computerWon;
        compScore++;
        updateScore();
        return;
      } else {
        winner.textContent = personWon;
        perScore++;
        updateScore();
        return;
      }
    } else if (personChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = computerWon;
        compScore++;
        updateScore();
        return;
      } else {
        winner.textContent = personWon;
        perScore++;
        updateScore();
        return;
      }
    } else if (personChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = computerWon;
        compScore++;
        updateScore();

        return;
      } else {
        winner.textContent = personWon;
        perScore++;
        updateScore();
        console.log("test", updateScore);

        return;
      }
    }
  };

  //   Then make a call of all small functions
  startGame();
  playGame();
};
game();
