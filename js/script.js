import myQuiz from './quiz.js';

const JabQuiz = (_ => {

    //Caching the DOM

    const headerQuestionEl = document.querySelector('.header__question'),
          headerTrackerEl = document.querySelector('.header__tracker'),
          headerBarEl = document.querySelector('.header__bar'),
          headerTaglineEl = document.querySelector('.header__tagline'),
          mainListEl = document.querySelector('.main__list'),
          footerNextBtn = document.querySelector('.footer__button--next'),
          footerRestartBtn = document.querySelector('.footer__button--restart');

    //Initiate

    const init = _ => {
        listeners();
        renderAll();
    }

    //Event Listeners

    const listeners = _ => {
        //Next

        footerNextBtn.addEventListener('click', _ => {
            if(myQuiz.currentIndex + 1 == myQuiz.questions.length) {
                renderScore();
                renderQuizEnd();
            }
            else {
                renderScore();
                myQuiz.currentIndex++;
                renderAll();
            }
        })

        //Restart

        footerRestartBtn.addEventListener('click', _ => {
            myQuiz.currentIndex = 0;
            myQuiz.score = 0;
            renderAll();
        })
    }

    //Rendering

    const renderAll = _ => {
        renderQuestion();
        renderTracker();
        renderProgress();
        renderChoices();
    }

    const renderHTML = (elem, text) => {
        elem.innerHTML = text;
    }

    const renderQuestion = _ => {
        let question =  myQuiz.questions[myQuiz.currentIndex].question;
        renderHTML(headerQuestionEl, question);
    }

    const renderTracker = _ => {
        let tracker = `${myQuiz.currentIndex + 1} of ${myQuiz.questions.length}`;
        renderHTML(headerTrackerEl, tracker);
    }

    const renderProgress = _ => {
        let width = `${((myQuiz.currentIndex + 1) / myQuiz.questions.length) * 100}%`;
        headerBarEl.style.width = width;
    }

    const renderChoices = _ => {
        let choices = myQuiz.questions[myQuiz.currentIndex].choices,
            markup = '';
        
        choices.forEach((choice, index) => {
            markup += `
            <li class="main__item">
                <input type="radio" name='choice' class="main__input" id='choice${index}'>
                <label class='main__label' for='choice${index}'>
                    <i></i>
                    ${choice}
                </label>
            </li>
             `;
        })

        renderHTML(mainListEl, markup);
    }

    const renderScore = _ => {
        let answer = myQuiz.questions[myQuiz.currentIndex].answer,
            mainInputEls = document.querySelectorAll('.main__input');

        mainInputEls.forEach((input, index) => {
           if(input.checked && index == answer) myQuiz.score++;
        })
    }

    const renderQuizEnd = _ => {
        let score = `${(myQuiz.score / myQuiz.questions.length) * 100}%`;
        renderHTML(headerQuestionEl, 'Great Job!');
        renderHTML(headerTrackerEl, `Your Score: ${score}`);
        renderHTML(headerTaglineEl, 'Complete!');
    }

    

    return {
        init
    }
})();

JabQuiz.init();