const questions = [
    {
        question: "who is most follower in Instagram ",
        answer: [
            {text: "Virat",  correct: false},
            {text: "Messi",  correct: false},
            {text: "Cristano",  correct: true},
            {text: "Neymar jr",  correct: false}
        ]
    },
    {
        question: "who is  the second most  follower in Instagram ",
        answer: [
            {text: "Virat",  correct: false},
            {text: "Messi",  correct: true},
            {text: "Cristano",  correct: false},
            {text: "Neymar jr",  correct: false}
        ]
    },
    {
        question: "who is the third most follower in Instagram ",
        answer: [
            {text: "Virat",  correct: false},
            {text: "Messi",  correct: false},
            {text: "Cristano",  correct: false},
            {text: "kinner jender",  correct: true}
        ]
    },
    {
        question: "who is most follower in Instagram in india ",
        answer: [
            {text: "Virat",  correct: true},
            {text: "priyanka chopra",  correct: false},
            {text: "Cristano",  correct: false},
            {text: "Shardha kapoor",  correct: false}
        ]
    }
];
const questionElem = document.querySelector(".question");
const answerBtn = document.querySelector(".answer-button");
const nextBtn = document.querySelector(".next-btn");

let currentQuestionIdx = 0;
let score = 0;

function startQuiz(){
    currentQuestionIdx = 0;
    score = 0;
    nextBtn.innerHTML = "Next"
    showQuestion();
}
function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIdx];
    let questionNo = currentQuestionIdx + 1;
    questionElem.innerHTML = questionNo  + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        const button  = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)

    });
    
}
function resetState(){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        score++;
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerBtn.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";

}
function showScore(){
    resetState()
    questionElem.innerHTML = `you scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "play Again";
    nextBtn.style.display = "block";
}
function handleNextBtn(){
    currentQuestionIdx++;
    if(currentQuestionIdx < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIdx < questions.length){
       handleNextBtn();
    }else{
        startQuiz();
    }

})
startQuiz();





//