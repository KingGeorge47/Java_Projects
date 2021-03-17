//Create userChoice function with const.
const getUserChoice = userInput => {
userInput = userInput.toLowerCase()  
 if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
   return userInput 
 } else return 'error message'
  }
//testgetUserchoice function
 console.log(getUserChoice('rock'))
 console.log(getUserChoice('paper'))
 console.log(getUserChoice('scissors'))

//Create computer choice
const getComputerChoice = () => {
let randomNumber = Math.floor(Math.random() *3)
switch(randomNumber) {
case 0: 
return 'rock'
break;
case 1:
return 'paper'
break;
case 2:
return 'scissors'
}
}
//testgetComputerChoice
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())

//create function to determine winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a Tie!'
  }
  if (userChoice === 'rock')
  if (computerChoice === 'paper') {
    return 'Congrats, you won!'
  }else {
    return 'You Won'
  }
      if (userChoice === 'scissors') 
  if (computerChoice === 'rock') {
    return 'Sorry, computer won!'
  } else {
    return 'Computer Won'
  }
      if (userChoice === 'paper') 
  if (computerChoice === 'scissors') {
    return 'Sorry, computer won!'
  } else {
    return 'Computer Won'
  }
}
//test to determine winner
console.log(determineWinner('rock', 'paper'))
console.log(determineWinner('scissors', 'rock'))
console.log(determineWinner('paper', 'scissors'))

//create playGame function
const playGame = () => {
  const userChoice = getUserChoice('scissors')
  const computerChoice = getComputerChoice('rock')
  console.log('You threw ' + userChoice)
  console.log('Computer threw ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}
playGame();

//At this point the game works great. if i wantto add the secret cheat code 'bomb'. i will change line 4 & 63, add userInput 'bomb' and also to add bomb' getUserChoice.