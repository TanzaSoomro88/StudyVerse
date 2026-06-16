
// =========================
// STUDYVERSE SCRIPT (FINAL CLEAN VERSION)
// =========================



// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

if(themeToggle){

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        themeToggle.innerHTML =
            document.body.classList.contains("dark")
            ? "☀️"
            : "🌙";

    });

}



// =========================
// DAILY QUIZ (SIMPLE MODE FIXED)
// =========================

document.querySelectorAll(".quiz-option").forEach(option => {

    option.addEventListener("click", () => {

        const isCorrect = option.dataset.correct === "true";

        document.querySelectorAll(".quiz-option").forEach(btn => {
            btn.style.background = "";
            btn.style.color = "";
        });

        if(isCorrect){
            option.style.background = "#7C9A92";
            option.style.color = "white";
        } else {
            option.style.background = "#d9534f";
            option.style.color = "white";
        }

    });

});



// =========================
// QUIZ HUB (FULL SYSTEM)
// =========================

const quizData = [
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
        answer: "Mitochondria"
    },
    {
        question: "SI unit of force?",
        options: ["Joule", "Newton", "Pascal", "Watt"],
        answer: "Newton"
    },
    {
        question: "Chemical formula of water?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        answer: "H2O"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("nextBtn");

function loadQuestion(){

    if(!questionElement || !answersElement) return;

    const q = quizData[currentQuestion];

    questionElement.textContent = q.question;

    answersElement.innerHTML = "";

    q.options.forEach(option => {

        const button = document.createElement("button");

        button.classList.add("quiz-option");

        button.textContent = option;

        button.addEventListener("click", () => {

            const isCorrect = option === q.answer;

            if(isCorrect){
                score++;
                if(scoreElement){
                    scoreElement.textContent = score;
                }

                button.style.background = "#7C9A92";
                button.style.color = "white";

            } else {
                button.style.background = "#d9534f";
                button.style.color = "white";
            }

        });

        answersElement.appendChild(button);

    });

}

if(nextButton){

    nextButton.addEventListener("click", () => {

        currentQuestion++;

        if(currentQuestion >= quizData.length){

            if(questionElement){
                questionElement.textContent =
                `Quiz Complete! Score: ${score}/${quizData.length}`;
            }

            if(answersElement){
                answersElement.innerHTML = "";
            }

            nextButton.style.display = "none";

            return;
        }

        loadQuestion();

    });

    loadQuestion();

}



// =========================
// SCROLL REVEAL (OPTIMIZED)
// =========================

const revealElements = document.querySelectorAll(
    ".card, .article-card, .note-card, .testimonial, .quiz-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

revealElements.forEach(el => observer.observe(el));



// =========================
// BUTTON FEEDBACK ANIMATION
// =========================

document.querySelectorAll(".primary-btn, .secondary-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.96)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);

    });

});



// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}