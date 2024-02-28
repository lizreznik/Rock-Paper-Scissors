// madLib START //
let userName = prompt('Enter username:');

let name = `${userName}`;

let usernameDiv = document.getElementById('username');

let userChoiceIcon = document.getElementById("userIcon")
let compChoiceIcon = document.getElementById("compIcon")

usernameDiv.innerHTML = `<p> ${userName} Score:</p>`;


// madLib END //

// functions START //
function playGame(selection) {

  //get User Selection and update iamge on site
  if (selection === 'rock') {
    userChoiceIcon.src = 'rock-stone-boulders-cartoon-isometric-vector-35351659-removebg-preview.png'
  } else if (selection === 'paper') {
    userChoiceIcon.src = 'paper1-removebg-preview.png'
  }
  else if (selection === 'scissors') {
    userChoiceIcon.src = 'scissorscartoon1-removebg-preview.png'
  }

  //get Computer Selection & Update computer Choice on site


  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice


  switch (randomNumber) {
    case 0:
      compChoiceIcon.src = 'rock-stone-boulders-cartoon-isometric-vector-35351659-removebg-preview.png';

      return ;
    case 1: compChoiceIcon.src = 'paper1-removebg-preview.png'
    return ;
    case 2:
      compChoiceIcon.src = 'scissorscartoon1-removebg-preview.png'
      return ;
  }
  





 
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