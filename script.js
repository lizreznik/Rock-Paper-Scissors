// madLib START //
let userName = prompt('Enter username:');

let name = `${userName}`;

let usernameDiv = document.getElementById('username');

usernameDiv.innerHTML = `<p> User: ${userName}</p>`;
// madLib END //

// functions START //
function rock() {
  document.getElementById("icons").src = 'rock-stone-boulders-cartoon-isometric-vector-35351659-removebg-preview.png'
}

function scissors() {
  document.getElementById("icons").src = 'scissorscartoon1-removebg-preview.png'
}

function paper() {
  document.getElementById("icons").src = 'paper1-removebg-preview.png'
}

// code academy JS START // 
const getUserChoice = userInput => { 
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
      return userInput;
  } else { 
      console.log('Error, please type: rock, paper, or scissors.')
    }
  }

  const getComputerChoice = () => { 
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0: 
    return 'rock';
    case 1: 
    return 'paper';
    case 2: 
    return 'scissors';
  }
  };

  const determineWinner = (userChoice, computerChoice) => { 
    if (userChoice === computerChoice) { 
      return 'This game is a tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') { 
        return "Sorry, computer won!";
      } else { 
        return "Congratulations, you won!";
      }
    }

    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') { 
        return "Sorry, computer won!";
      } else { 
        return "Congratulations, you won!";
      }
    }

  if (userChoice === 'scissors') {
      if (computerChoice === 'rock') { 
        return "Sorry, computer won!";
      } else { 
        return "Congratulations, you won!";
      }
    }

    if (userChoice === 'bomb') { 
      return 'Congratulations, you won!';
    }
  };

  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
  };

  playGame()
  // code academy JS END //