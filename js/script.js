//getting al necessary elements
const start_btn = document.querySelector('.start-btn button');
const content_box = document.querySelector('.content-box');
const exit_btn = document.querySelector('.buttons .exit');
const continue_btn = document.querySelector('.buttons .continue');
const quiz_box = document.querySelector('.quiz-box');
const option_list = document.querySelector('.option-list');
const timerCount = quiz_box.querySelector(".timer .timer-sec");
const timeLine = quiz_box.querySelector("header .time-line");
const timeOff = quiz_box.querySelector("header .timer-text");


//If start Quiz button is clicked
start_btn.onclick = ()=>{
    content_box.classList.add('activeInfo');
}

//If Exit Quiz button is clicked
exit_btn.onclick = ()=>{
    content_box.classList.remove('activeInfo'); //Hide theinfo box
}

//If Continue button is clicked 
continue_btn.onclick = ()=>{
    content_box.classList.remove('activeInfo');//hide the info box
    quiz_box.classList.add('activeQuiz');//reveal the quiz box
    showQuestions(0);
    qCounter(1);
    timerStart(20);
    startTimerLine(0);
    
}                                                                                                                                                                 

let q_count = 0;
let q_numb = 1;
let counter;
let counterLine;
let timeValue = 20;
let widthValue = 0; //for timer line
let userScore = 0;
let percentValue;

const next_btn = document.querySelector('.next-btn');
const result_box = document.querySelector(".result-box");

const quit_quiz = document.querySelector(".buttons .quit");


quit_quiz.onclick = ()=>{
    window.location.reload();
}

//If next button is clicked
next_btn.onclick = ()=>{
   if(q_count < questions.length){
        q_count++;
        q_numb++;
        showQuestions(q_count);
        qCounter(q_numb);
        clearInterval(counter);
        timerStart(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none"; //so that after clicking next button it dissapears again till an answer is selected
        timeOff.textContent = "Time Left";
   }else{
       clearInterval(counter);
       clearInterval(counterLine);
       console.log('Questions Completed');
       showResultBox();
   }
}


//getting questions and options from array
function showQuestions(index){
    const q_text = document.querySelector('.q-text');
    const option_list = document.querySelector('.option-list');
    let q_tag = '<span>' + questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';

    q_text.innerHTML = q_tag;
    option_list.innerHTML = option_tag;


    const option = option_list.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns =  answer.textContent;
    let correctAns = questions[q_count].answer;
    let allOptions = option_list.children.length;
    
    console.log(userScore);
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log('Answer is correct');
        answer.insertAdjacentHTML("beforeend", tickIcon);
        userScore += 1;
    }else{
        answer.classList.add("incorrect");
        console.log('Answer is wrong');
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //If answers are incorrect then automatically select the correct answer
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }

    }
    
    //once user has chosen an option disable all other options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
        
    }
    next_btn.style.display = "block"; //to make next button appear when an option has been selected
}

//function to show result box
function showResultBox(){
    content_box.classList.remove("activeInfo");   //hide the content box
    quiz_box.classList.remove("activeQuiz");     //hide the quizbox
    result_box.classList.add("activeResult");     //reveal the result box
    const scoreText = result_box.querySelector(".score-text");
    const scorePercent = result_box.querySelector(".score-percent");
    if(userScore >= 20){
        let scoreTag = '<span>'+ 'Congrats! ' +'You got <p>'+ userScore +'</p> out of <p>'+ questions.length + "."  + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }else if(userScore <=10){
        let scoreTag = '<span>' + 'Sorry! ' +'You got <p>'+ userScore +'</p> out of <p>'+ questions.length + "."  + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }else{
        let scoreTag = '<span>You got <p>'+ userScore +'</p> out of <p>'+ questions.length + "."  + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    

    percentValue = (userScore / questions.length)*100;
    let percentTag = '<span>'+ percentValue + '%' +'</span>';
    scorePercent.innerHTML = percentTag;
};

function timerStart(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timerCount.textContent = time;
        time--;
        if(time < 9){  //Add zero when timer reaches lower denominators such as 9
            let addZero = timerCount.textContent;
            timerCount.textContent = '0' + addZero;
        }
        if(time < 0){ //Stop counter when it reaches 0 and make its text "00"
            clearInterval(counter);
            timerCount.textContent = "00";
            timeOff.textContent = "Time Off";

            let correctAns = questions[q_count].answer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
                
            }
            next_btn.style.display = "block";
        }
    }
}

//function for timer line
function startTimerLine(time){
    counterLine = setInterval(timer, 210); //ADJUST THIS NUMBER TO REDUCE RATE AT WHICH TIMER MOVES ESPCECIALLY IF YOU CHANGE TIMER VALUE
    function timer(){
       time += 1;
       timeLine.style.width = time + "%";
       if(time > 99){ 
           clearInterval(counterLine);
        }
    }
}








function qCounter(index){
    const footer_q_counter = quiz_box.querySelector(".total-q");
    let total_q_tag = '<span><p>' + index + '</p>Of<p>' + questions.length + '</p>Questions</span>';
    footer_q_counter.innerHTML = total_q_tag;

}
