let Highscore = document.querySelector(".High-score");
let time = document.querySelector(".timer");

let questionPage = document.querySelector(".questions")
let btn = document.querySelector(".opt-btn");

let btnOne = document.querySelector(".choice1");
let btnTwo = document.querySelector(".choice2");
let btnThree = document.querySelector(".choice3")
let btnFour = document.querySelector(".choice4")
let answer = document.querySelector(".answer")
let form = document.querySelector(".for")

let heading = document.querySelector(".prompt");
let intro = document.querySelector(".intro");

let begin = document.querySelector(".begin");

let startBtn = document.querySelector(".start")
let end = document.querySelector(".end");

let seconds = 100;

Highscore.addEventListener("click", function(){
    heading.setAttribute("class","hide");

})

startUpPage();
startButton();


function startUpPage() {
    heading.textContent = "Coding Quiz Challenge";
    intro.textContent = "Try to answer the following code-related questions with in the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds";
    btn.setAttribute("class","hide");
    end.setAttribute("class","hide");
    answer.setAttribute("class","hide")
}

function startButton(){
    //start the timer 
    begin.addEventListener("click",function (){
        let timerInterval = setInterval(function() {
            seconds--;
            time.textContent = "Timer: " + seconds ;
            if(seconds < 0) {
                clearInterval(timerInterval);
              }
              
          }, 1000);
          questionOne()
          
        });
    // prestent the question function that itterates through the questions
    
}
let int = document.getElementById("#initials");
function finalForm(){
    heading.textContent=" Congradulation";
    form.setAttribute("class","")
    btn.setAttribute("class","hide")
    end.setAttribute("class","");

    
    localStorage.setItem("int", JSON.stringify(int+ seconds));

}



function questionOne(){
    heading.textContent = "Commonly used date types DO NOT include:";
    intro.setAttribute("class","hide")
    btn.setAttribute("class","")
    answer.setAttribute("class","")
    btnOne.textContent = " 1: strings";
    btnTwo.textContent = " 2: booleans";
    btnThree.textContent = "3: alerts";
    btnFour.textContent = "4: numbers"

    btn.addEventListener("click",function(event){
        if(event.target === btnThree){
            answer.setAttribute("style", "background-color: green")
            seconds=seconds;
            return questionTwo()
        }
        else{
            answer.setAttribute("style", "background-color: red")
            seconds = seconds - 10;
            return questionTwo() 
        }
    });
}


function questionTwo(){
    heading.textContent = "Arrays in JavaScript can be used to store ___";
    btnOne.textContent = " 1: numbers and strings ";
    btnTwo.textContent = " 2: other arrays";
    btnThree.textContent = "3: booleans";
    btnFour.textContent = "4: all of the above";

    btn.addEventListener("click",function(event){
        if(event.target === btnFour){
            answer.setAttribute("style", "background-color: green")
            seconds=seconds;
            return questionThree();
        }
        else{
            answer.setAttribute("style", "background-color: red")
            seconds=seconds;
            seconds = seconds - 10;
            return questionThree();
        }
    });
}

function questionThree(){
    heading.textContent = "A very useful tool usewd during development and debugging for printing content to the de buggeris:";
    btnOne.textContent = " 1: JavaScript";
    btnTwo.textContent = " 2: Terminal/bash";
    btnThree.textContent = "3: for loops";
    btnFour.textContent = "4: console.log"

    btn.addEventListener("click",function(event){
        if(event.target === btnFour){
            answer.setAttribute("style", "background-color: green")
            seconds=seconds;
            return questionFour()
        }
        else{
            answer.setAttribute("style", "background-color: red")
             seconds = seconds - 10;
            return questionFour()
        }
    });

}

function questionFour(){
    heading.textContent ="The conditions in an if/else statement is enclosed within ___";
    btnOne.textContent = " 1: quotes";
    btnTwo.textContent = " 2: curly brackets";
    btnThree.textContent = "3: parrentheses";
    btnFour.textContent = "4: square brackets"

    btn.addEventListener("click",function(event){
        if(event.target === btnTwo){
            answer.setAttribute("style", "background-color: green")
            seconds=seconds;
            return finalForm();
        }
        else{
            answer.setAttribute("style", "background-color: red")
            seconds = seconds - 10;
            return finalForm();
        }
    });

}

