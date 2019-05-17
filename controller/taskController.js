let tasks = require('../model/tasks');
const Task = require('../model/Task');

exports.getTasks =  (req, res) => {
    res.render('tasks/list', {
        projectTitle : 'Task Manager',
        title: 'Technologies', 
        taskItems: tasks
    });
}

exports.addTask = (req,res) => {
    res.render('tasks/add',{
        projectTitle : 'Task Manager',
        title : 'Add task'
    });
}

exports.addTaskToDB = (req,res) => {

    const data = req.body;
    let valid = true;
    if(data.title === '') {
        valid = false;
    }
    if(data.description === '') {
        valid = false;
    }
    // if(data.resourceUrl === '') {
    //     valid = false;
    // }

    if(valid) {
        const newTask = new Task(
            tasks.length + 1,
            data.title,
            data.description,
            data.resourceUrl
        )
    tasks.push(newTask);
    res.redirect('/'); 
    }
    else  {
        res.redirect('/tasks/add');
    }
    
}

exports.taskDetails =  (req,res) => {
    const id = Number(req.params.id);

    let task = null;

for(var i=0; i<tasks.length;i++) {
    if(id===tasks[i].id) {
        task = tasks[i];
        break;
    }
}

    res.render('tasks/details', {
        projectTitle : 'Task Manager',
        title : 'Details',
        task :task
    })
}

exports.taskDelete = (req,res) => {
    const id = Number(req.params.id);
    // res.send("Task deleted");
    tasks.forEach((task, i)=> {
        if(id ===task.id) {
            tasks.splice(i,1);
            res.redirect('/');
        }
    });
}