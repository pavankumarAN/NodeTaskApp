const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); 
const app = express();
const taskManagerRouter = require('./routes/taskManager');

app.get('/', (req,res) => {
    res.redirect('/tasks/list');
});
app.use(bodyParser.urlencoded( {extended : false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use('/tasks',taskManagerRouter);

module.exports = app;