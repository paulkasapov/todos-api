const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const todo_controller = require('../controllers/todo.controller');


// a simple test url to check that all of our files are communicating correctly.
router.post('/', todo_controller.todo_create);
router.get('/', todo_controller.todo_details);
router.put('/:id', todo_controller.todo_update);
router.delete('/remove/:id', todo_controller.todo_delete);

module.exports = router;

