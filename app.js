const game = () => {
  // Since we want to update the scores
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
        console.log(computerNumber);
        console.log(computerChoice);

        //To update the hand icons
        personHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;

        //Now call the compareHands funct to update the text for winner
        compareHands(this.textContent, computerChoice);
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
    console.log("my choice", personChoice);

    //   This is to update the text about who won
    const winner = document.querySelector(".winner");
    console.log("class", winner);

    // Checking for a tie
    if (personChoice === computerChoice) {
      winner.textContent = "We have a Tie 🤪!";
      return;
    }

    //Then check for rock
    if (personChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Human player wins 🤩🤴🏿";
        //call and increment the person's score
        perScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "The computer beat you 👻";
        //call and increment the computer's score
        compScore++;
        updateScore();
        return;
      }
    }

    //
    //Then check for rock
    if (personChoice === "rock") {
      if (computerChoice === "paper") {
        winner.textContent = "The computer beat you 👻";
        //call and increment the person's score
        compScore++;
        updateScore();
        return;
      }
    }

    //Then check for rock
    if (personChoice === "rock") {
      if (computerChoice === "rock") {
        winner.textContent = "We have a tie";
        //call and increment the person's score
        return;
      }
    }

    //Now checking for paper
    if (personChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "The computer beat you 👻";
        compScore++;
        updateScore();

        return;
      } else {
        winner.textContent = "Human player wins 🤩🤴🏿";
        perScore++;
        updateScore();

        return;
      }
    }

    // Finally checking for scissors
    if ((personChoice = "scissors")) {
      if (computerChoice === "rock") {
        winner.textContent = "The computer beat you 👻";
        compScore++;
        updateScore();

        return;
      } else {
        winner.textContent = "Human player wins 🤩🤴🏿";
        perScore++;
        updateScore();

        return;
      }
    }
  };

  //   Then make a call of all small functions
  startGame();
  playGame();
};
game();
