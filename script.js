// madLib START //
let userName = prompt('Enter username:');

let name = `${userName}`;

let usernameDiv = document.getElementById('user-score');
let computerScoreDiv = document.getElementById('computer-score');
let displayMessage = document.getElementById('displayMessage')

let userChoiceIcon = document.getElementById("userIcon")
let compChoiceIcon = document.getElementById("compIcon")

let computerChoice
let userChoice

let userScore = 0;
let computerScore = 0;


usernameDiv.innerHTML = `<p> ${userName} Score: ${userScore}</p>`;


// madLib END //

// functions START //
function playGame(selection) {

  //get User Selection and update iamge on site
  if (selection === 'rock') {
    userChoiceIcon.src = 'rock-stone-boulders-cartoon-isometric-vector-35351659-removebg-preview.png'
    userChoice = 'rock'
  } else if (selection === 'paper') {
    userChoiceIcon.src = 'paper1-removebg-preview.png'
    userChoice = 'paper'
  }
  else if (selection === 'scissors') {
    userChoiceIcon.src = 'scissorscartoon1-removebg-preview.png'
    userChoice = 'scissors'
  }

  //get Computer Selection & Update computer Choice on site


  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice


  switch (randomNumber) {
    case 0:
      compChoiceIcon.src = 'rock-stone-boulders-cartoon-isometric-vector-35351659-removebg-preview.png';
      computerChoice = 'rock'
      break;
    case 1: compChoiceIcon.src = 'paper1-removebg-preview.png'
      computerChoice = 'paper'
      break;
    case 2:
      compChoiceIcon.src = 'scissorscartoon1-removebg-preview.png'
      computerChoice = 'scissors'
      break;
  }



  //Evaluate Winner/loser and update score
console.log('Here!!!')
  if (userChoice === computerChoice){
      displayMessage.textContent = 'Yikes! You tied! Try again.'
  } else if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper'){
    displayMessage.textContent = 'Nice job! You won this round!';
    userScore = userScore + 1;
  } else {
    displayMessage.textContent = 'Womp Womp! You lost... better luck next round!';
    computerScore = computerScore + 1;
  }
//display score update
  usernameDiv.innerHTML = `<p> ${userName} Score: ${userScore}</p>`;
  computerScoreDiv.innerHTML = `<p> Computer Score: ${computerScore}</p>`;




    // reset button
    function resetForm() {
      // Replace 'myForm' with the actual ID of your form
      document.getElementById('your-score').reset();
      document.getElementById('computer-score').reset();
      document.getElementById('playGame').reset();
    }





  //let displayMessage = [
  //   'NAPS is by far the most significant cultural force of the decade. — New York Times',
  //   'These days sleeping at your desk is not just acceptable, it’s encouraged. — The Atlantic',
  //   'NAPS has changed the way people think about sleep, on a grand scale. — Washington Post',
  //   'Happiness increased 200% since NAPS began promoting siestas. — National Science Review',
  //   'NAPS has ushered in a new era of sleep. — USA Today',
  //   'Not surprisingly, more siestas means more productivity. — Wall Street Journal',
  //   'NAPS is doing the hard work of helping people get the rest they need. — U.S. News'
  // ]


};

















// // code academy JS START //

// let roundsplayed = 0
// let playerscore = 0
// let computerscore = 0


// const getComputerChoice = () => {
//   const randomNumber = Math.floor(Math.random() * 3);
//   switch (randomNumber) {
//     case 0:
//       return 'rock';
//     case 1:
//       return 'paper';
//     case 2:
//       return 'scissors';
//   }
// };

// function determineWinner(userChoice) {

//   const determineWinner = (userChoice, computerChoice) => {
//     if (userChoice === computerChoice) {
//       return 'This game is a tie!';
//     }
//     if (userChoice === userChoice(rock)) {
//       if (computerChoice === 'paper') {
//         return "Sorry, computer won!";
//       } else {
//         return "Congratulations, you won!";
//       }
//     }

//     if (userChoice === userChoice(paper)) {
//       if (computerChoice === 'scissors') {
//         return "Sorry, computer won!";
//       } else {
//         return "Congratulations, you won!";
//       }
//     }

//     if (userChoice === userChoice(scissors)) {
//       if (computerChoice === 'rock') {
//         return "Sorry, computer won!";
//       } else {
//         return "Congratulations, you won!";
//       }
//     }
//   };
// };



// // code academy JS END //