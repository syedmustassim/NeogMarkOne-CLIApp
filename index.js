var readlineSync = require("readline-sync"); 

var score = 0; 

console.log("Welcome to 'Do you know Syed Mustassim?'")

console.log();

var userName = readlineSync.question("What is your name? ")
console.log()
console.log("Welcome " + userName + "!")
console.log()

var duration = readlineSync.question("How long have you known me for?  Please enter the number of years: ")

if (duration > 25){
  console.log()
  console.log("Are you kidding me? I am only 25 years myself! How could you have known me for longer than that?!")
  console.log()
}
  
else if(duration > 10 && duration < 25){
  console.log()
  console.log("Well, this should be easy for you!")
  console.log()
}

else if(duration < 10 && duration > 2 ){
  console.log()
  console.log("Let us see how much you have gotten to know me already! ")
  console.log()
}

else {
  console.log()
  console.log("Are we doing guesswork here? ")
  console.log()
}

var questions = [{
  question: "Where did I grow up? ",
  answer: "Oman"
},
{
  question: "Which school did I graduate from? ",
  answer: "Indian School Muladha"
},
{
  question: "What is my favorite season? ",
  answer: "Autumn"
},
{
  question: "My favourite holiday destination? ",
  answer: "Japan"
},
{
  question: "I am a foodie. But do you know which is my favourite food? ",
  answer: "Biriyani"
}]

function game()
{
  for (var i = 0; i < questions.length; i++){
    qna(questions[i].question, questions[i].answer)
  }
}

function qna(question, answer)
{
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log();
    console.log("That's Right! ")
    score = score + 1;
    console.log();
    console.log("Your score is: "+ score)
    console.log()
  }
  else{
    console.log()
    console.log("That's Wrong! ")
    console.log()
  }
    
}

game();
console.log("Your final score is: ", score)
console.log()

var highScores = [
  {
    name: "Sameer - ",
    score: 5
  }, 
  {
    name: "Afnan - ",
    score: 4,
  },
  {
    name: "Neha - ",
    score: 3
  }, 
]

function highscore(){
  for (var i = 0; i < highScores.length; i++){
    console.log(highScores[i].name, highScores[i].score)
  }
  console.log()
}

console.log("Want to see how well you fared against the others? ")
var hsc = readlineSync.question()

console.log()

if(hsc == "Yes" || hsc == "yes"){
  highscore()
  console.log("Think you should be on the list? Give me a shout and I'll add you!")
}

else{
  console.log()
  console.log("Thank you for playing! ")
}