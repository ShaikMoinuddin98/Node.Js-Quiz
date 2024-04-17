const express = require('express');
const bodyParser = require('body-parser');
const quizData = require("./quiz.json")

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML interface for the quiz
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Endpoint for getting quiz questions
app.get('/quiz', (req, res) => {
    res.json(quizData);
});

// Endpoint for handling user submissions
app.post('/submit', (req, res) => {
    const userAnswers = req.body.answers;
    let score = 0;
    const feedback = [];

    // Calculate score and provide feedback
    quizData.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
            feedback.push({ question: question.question, correct: true });
        } else {
            feedback.push({ question: question.question, correct: false, correctAnswer: question.answer });
        }
    });

    res.redirect(`/results?score=${score}&feedback=${encodeURIComponent(JSON.stringify(feedback))}`);
});

app.get('/results', (req, res) => {
    // Return quiz results as JSON
    res.sendFile(__dirname+"/result.html")
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
