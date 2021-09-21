'use strict';

const button =  document.querySelector('.check')

let random;
function newRandom() {
 random = Math.trunc(Math.random()*20)+1;
 console.log(random)
}
newRandom();

let score = Number (document.querySelector('.score').textContent);
// console.log((score));

let highScore = Number (document.querySelector('.highscore').textContent);

let start = function startGuess (){
let guess = Number (document.querySelector('.guess').value);
   if (!guess){
      displayMsg ('😘 there is no value') ;
   }   

//REFACTORING
  else if (guess!=random){
    if(score!=0){
        displayMsg ( guess < random ? "TOO LOW 🤞" : "TOO HIGH 🤞");
        score = score - 1;
      scoreDisplay(score);
    }
     else  {
        displayMsg ('you lost 😢');
    }
  }
  else if(guess==random){
    displayMsg ('you guessed the Number 🙌');  
    document.querySelector('.number').textContent=random;
    document.querySelector('body').style.backgroundColor = '#800000 '
    score = score + 1;
    scoreDisplay(score);
    button.disabled = true;
      if(score>highScore){
        highScore = score;
        document.querySelector('.highscore').textContent=highScore;
      }
      else highScore = highScore
 }
}

//restarting the game
let again = function again (){
    newRandom();
    displayMsg ('😘 hi player, start guessing' );
    button.disabled = false;
    scoreDisplay(20);
    document.querySelector('.guess').value=0;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor = '#000000 '
}

//adding eventListeners to buttons
displayMsg ('😘 hi player, start guessing');
document.querySelector('.check').addEventListener('click', start)
document.querySelector('.again').addEventListener('click', again)
//refactoring
function displayMsg(msg){
    document.querySelector('.message').textContent = msg;
}
function scoreDisplay(score){
    document.querySelector('.score').textContent = score;
}
