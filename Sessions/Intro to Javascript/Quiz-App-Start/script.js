const start_btn = document.querySelector('.start_btn');
const info_box = document.querySelector('.info_box');
const exit_quiz = document.querySelector('.exit_quiz');
const continue_btn = document.querySelector('#continue_btn');
const quiz_box = document.querySelector('.quiz_box');
const timer_sec = document.querySelector('.timer_sec');
const time_line = document.querySelector('.time_line');
const que_text = document.querySelector('.que_text');
const option_list = document.querySelector('.option_list');
const next_btn = document.querySelector('.next_btn');
const total_que = document.querySelector('.total_que');

let timerCount = 15;
let timerLine = 0;
let currentQ = 0;
let timerInt;
let allowNext = false;

start_btn.addEventListener('click', () => {
    info_box.classList.add('activeInfo');
    start_btn.style.display = "none";
});

exit_quiz.addEventListener('click', () => {
    info_box.classList.remove('activeInfo');
    start_btn.style.display = "block";
});

continue_btn.addEventListener('click', () => {
    quiz_box.classList.add('activeQuiz');
    info_box.classList.remove('activeInfo');
    startQuiz();
    loadQuestion(currentQ);
});

next_btn.addEventListener('click', () => {
    if (allowNext) {
        if (currentQ < questions.length - 1) { currentQ++; }
        loadQuestion(currentQ);
        allowNext = false;
        next_btn.style.opacity = 0;
    }
});

function startQuiz() {
    clearInterval(timerInt);
    timerCount = 15;
    timerLine = 0;
    timerInt = setInterval(() => {
        if (timerCount != 0) {
            timerCount--;
            timerLine += 37;
            time_line.style.width = timerLine + "px";
        } else {
            clearInterval(timerInt);
        }
        timer_sec.textContent = timerCount;
    }, 1000);
}

function loadQuestion(q) {
    time_line.style.width = 0 + "px";
    timer_sec.textContent = 15;
    que_text.textContent = questions[q].numb + '. ' + questions[q].question;
    let holdOptions = questions[q].options;

    option_list.innerHTML = '';
    for (let i = 0; i < holdOptions.length; i++) {
        option_list.innerHTML += `
        <div class="option" onclick="pickOption(${i})">
            ${holdOptions[i]}
        </div>
        `;
    }

    total_que.innerHTML = `
    <span><p>${questions[q].numb}</p> of <p>${questions.length}</p></span>
`
    startQuiz();
}

function pickOption(i) {
    allowNext = true;
    next_btn.style.opacity = 1;
    disableOptions();
    let allopt = questions[currentQ].options;
    let selectedOpt = allopt[i];
    if (selectedOpt.trim() === questions[currentQ].answer) {
        option_list.children[i].classList.add('correct');
    }
    else {
        option_list.children[i].classList.add('incorrect');
    }
}

function disableOptions() {
    clearInterval(timerInt);
    let holdOptions = questions[currentQ].options;

    option_list.innerHTML = '';
    for (let i = 0; i < holdOptions.length; i++) {
        option_list.innerHTML += `
        <div class="option disabled">
            ${holdOptions[i]}
        </div>
        `;
    }
}

