const express = require('express');
const taskControlller = require('../controller/taskController');

const router = express.Router();
router.get('/list', taskControlller.getTasks);
router.get('/add',taskControlller.addTask);
router.post('/add',taskControlller.addTaskToDB);

router.get('/:id/details', taskControlller.taskDetails);
router.get('/:id/delete', taskControlller.taskDelete);



module.exports = router;