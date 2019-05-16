let tasks = require('../model/tasks');

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