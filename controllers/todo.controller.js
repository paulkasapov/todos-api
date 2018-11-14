const Todo = require('../models/todos.model');

// controllers/products.js
exports.todo_create = function (req, res) {
    let todo = new Todo(
        {
            text: req.body.text,
            done: req.body.done
        }
    );
    console.log('todo', todo)
    todo.save(function (err) {
        if (err) {
            return res.sendStatus(500).send({...err});
        }
        res.send('Todo Created successfully')
    })
};

exports.todo_details = function (req, res) {
    Todo.find({}, function (err, todo) {
        if (err) return res.sendStatus(500).send({...err});
        res.send(todo);
    })
};

exports.todo_update = function (req, res) {
    Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, todo) {
        if (err) return res.sendStatus(500).send({...err});
        res.send('Todo udpated.');
    });
};

exports.todo_delete = function (req, res) {
    Todo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.sendStatus(500).send({...err});
        res.send('Deleted successfully!');
    })
};