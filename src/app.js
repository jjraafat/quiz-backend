const express = require('express');
const app = express();
const quizRoutes = require('./routes/quiz.routes');
const errorHandler = require('./middleware/error.middleware');


app.use(express .json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.status(200).json({ message: 'Node.js + Express MVC API is running' });
  console.log("inside app.get");

});


app.use('/api', quizRoutes);


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use(errorHandler);

module.exports = app;
