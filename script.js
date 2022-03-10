let plyScore = 0;
let cpuScore = 0;
let plySelect = '';
let plyScoreSpan = document.querySelector('#plyScore');
let cpuScoreSpan = document.querySelector('#cpuScore');
let outcome = document.querySelector('#outcome');
let wpnChoice = document.querySelector('#wpnChoice')



//buttons

const buttP = document.querySelector('#Paper');
const buttR = document.querySelector('#Rock');
const buttS = document.querySelector('#Scissors');

const buttons = document.querySelectorAll('.img');
 


// event listeners
buttons.forEach((button) => {
   button.addEventListener('click', game)
});



// game function

function game(){

   buttons.forEach((buttonTag) => {
      plySelect = buttonTag.id;
      console.log(plySelect)
   });
 
let cpuSelect = computerPlay();
//   console.log(plySelect)
//   console.log(cpuSelect)
   
  playRound(cpuSelect, plySelect);

   wpnChoice.textContent = `You chose ${plySelect} and your foe chose ${cpuSelect}`

}



 // tester function
 function test(){
   alert('test')
}



// cpu randomiser

function computerPlay(){

   let cpuBrain =  Math.floor((Math.random() * 9) + 1);



//console.log(cpuBrain);

   if(cpuBrain <= 3) {
    return 'Paper';
   } else if(cpuBrain <= 6 && cpuBrain > 3) {
    return 'Rock';
   } else {
    return 'Scissors';
   }
}



// ply choice vs cpu

function playRound(cpuSelect, plySelect) {

   if (plySelect === 'Scissors') {
      firstChoice();
     } 
  else if (plySelect === 'Rock') {
      secondChoice();
   } if (plySelect === 'Paper') {
      thirdChoice();
   }
  



//  eventualities and logic

   function firstChoice(){
         
      if (plySelect === 'Scissors' && cpuSelect === 'Rock'){
         cpuScoreSpan.textContent = ++cpuScore;
         outcome.textContent = 'Hard luck, keep trying!';
      } else if (plySelect === 'Scissors' && cpuSelect === 'Paper'){
         plyScoreSpan.textContent = ++plyScore;
         outcome.textContent = 'Great! You won that round!';
      } if (plySelect === 'Scissors' && cpuSelect === 'Scissors'){
         outcome.textContent = 'A draw! So exciting!!';
      }      
   }
   
   function secondChoice(){
   
      if (plySelect === 'Rock' && cpuSelect === 'Paper'){
         cpuScoreSpan.textContent = ++cpuScore;
         outcome.textContent = 'Hard luck, keep trying!';
      } else if (plySelect === 'Rock' && cpuSelect === 'Scissors'){
         plyScoreSpan.textContent = ++plyScore;
         outcome.textContent = 'Great! You won that round!';
      } if (plySelect === 'Rock' && cpuSelect === 'Rock'){
        outcome.textContent = 'A draw! So exciting!!';
      }
   }
   
   function thirdChoice(){
   
      if (plySelect === 'Paper' && cpuSelect === 'Scissors'){
         cpuScoreSpan.textContent = ++cpuScore;
         outcome.textContent = 'Hard luck, keep trying!';
      } else if (plySelect === 'Paper' && cpuSelect === 'Rock'){
         plyScoreSpan.textContent = ++plyScore;
         outcome.textContent = 'Great! You won that round!';
      } if (plySelect === 'Paper' && cpuSelect === 'Paper'){
         outcome.textContent = 'A draw! So exciting!!';
      }
   }

   if(plyScore == 5){
      outcome.textContent = 'YEAH BABY YOU WON!!!';
   } else if(cpuScore == 5){
      outcome.textContent = 'woe is you!! You LOST!!!';
   }

   // reset button to play again
   if(outcome.textContent == 'YEAH BABY YOU WON!!!' || outcome.textContent == 'woe is you!! You LOST!!!'){
      var element = document.createElement('button');
      element.appendChild(document.createTextNode(' Wanna Play Again?'))

      var page = document.getElementById('replay');
      page.appendChild(element);
   }
 }