import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, ind) => {
          return (
            <Todo
              key={todo._id}
              toggleComplete={id => this.props.toggleComplete(id)}
              id={todo._id}
              todoXClick={id => this.props.todoXClick(id)}
              task={todo.task}
              completed={todo.completed}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
