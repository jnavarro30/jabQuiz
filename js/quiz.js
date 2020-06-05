import quizQuestions from './question.js';

class Quiz {
    constructor(questions, currentIndex, score) {
        this.questions = questions;
        this.currentIndex = 0;
        this.score = 0;
    }
}

const myQuiz = new Quiz(quizQuestions);

export default myQuiz;