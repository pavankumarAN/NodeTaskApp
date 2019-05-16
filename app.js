const express = require('express');
const path = require('path');
const app = express();
const taskManagerRouter = require('./routes/taskManager');

app.get('/', (req,res) => {
    res.redirect('/tasks/list');
});


// app.get('/', (req,res) => {
//         // res.send('<h1>Pavan</h1>');
//         res.sendFile(path.join(__dirname, './public/index.html'));
// });
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use('/tasks',taskManagerRouter);

module.exports = app;