const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem.js');

router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: req.body.task,
    completed: req.body.completed
  });

  testTodo
    .save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    });
});

router.get('/all', (req, res) => {
  console.log('/all getting');
  TodoItem.find().exec(function(err, ret_Todos) {
    //JSON array
    res.send(ret_Todos);
  });
});

router.post('/remove', (req, res) => {
  console.log('/remove POSTing');
  TodoItem.remove({ _id: req.body._id }, function(err) {
    if (err) {
      console.log('/remove -- removing mongoose item failure');
    } else {
      TodoItem.find().exec(function(err, ret_Todos) {
        //JSON array
        if (!err) {
          console.log(ret_Todos);
          res.send(ret_Todos);
        }
      });
    }
  });
});

router.post('/toggle', (req, res) => {
  console.log('/toggle POSTing', req.body._id);

  TodoItem.findOne({ _id: req.body._id }).exec(function(err, ret_Todo) {
    if (!err && ret_Todo) {
      ret_Todo.completed = !ret_Todo.completed;
      ret_Todo.save(function(err, updated_Todo) {
        if (!err) {
          res.send(updated_Todo);
        }
      });
    }
  });
});

module.exports = router;
