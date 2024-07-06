let score =  JSON.parse(localStorage.getItem('score'))  || {
    wins : 0,
    losses : 0,
    ties :0
};
function game(playerChoice){
    const computerMove = pickComputerMove();
    document.querySelector('.computerC').innerHTML =   `You 
    <img src="images/${playerChoice}-emoji.png"  class="move">
     Computer <img src="images/${computerMove}-emoji.png"  class="move">`
    
    if (computerMove === playerChoice) {
        document.querySelector('.Result').innerHTML = 'Tie';
        score.ties++;
    } 
    else if (
        (playerChoice === 'rock' && computerMove === 'scissors') ||
        (playerChoice === 'paper' && computerMove === 'rock') ||
        (playerChoice === 'scissors' && computerMove === 'paper'))
  {
       document.querySelector('.Result').innerHTML = 'You Win';
        score.wins++;
    } 
    else {
        document.querySelector('.Result').innerHTML = 'You Lose';
        score.losses++;
    }
    display();
    localStorage.setItem('score',JSON.stringify(score));


}

function display(){
document.querySelector('.scoreBoard')
.innerHTML = `wins : ${score.wins} , losses : ${score.losses} ,ties :${score.ties}`;
}

 function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'scissors';
}

return computerMove;
}


function reset(){
score.wins =0;
score.losses=0;
score.ties =0;
display();
localStorage.setItem('score',JSON.stringify(score));
}

let autoplay = false ;
let id;
function auto(){
  if(!autoplay ){
      id =  setInterval(function(){
          game(pickComputerMove());
        }
      ,1000)
      autoplay= true;
  }
  else{
    autoplay = false;
    clearInterval(id) ;
  }


}