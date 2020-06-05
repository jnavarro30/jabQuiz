
class Question {
    constructor(question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }
}

const q1 = new Question('What does HTML stand for?', ['Hexa Tech Machine Learning', 'Hyper Text Markup Language', 'Hexa Tech Markup Language', 'Hyper Text Machine Learning'], 1);

const q2 = new Question('What does CSS stand for?', ['Central Styling Service', 'Cascading Styling Service', 'Central Style Sheets', 'Cascading Style Sheets'], 3);

const q3 = new Question('What is Javascript mainly used for?', ['Web Development', 'Web Applications', 'Web Servers', 'All of the Above'], 3);

const q4 = new Question('What year was Javascript created?', [1995, 1996, 1998, 1999], 0);

const q5 = new Question('Who created Javascript?', ['Peter Griffin', 'Homer Simpson', 'Brendan Eich', 'Bob Belcher'], 2);

const quizQuestions = [q1, q2, q3, q4, q5];

export default quizQuestions;