import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, ind) => {
          return (
            <Todo
              toggleComplete={index => this.props.toggleComplete(index)}
              ind={ind}
              todoXClick={index => this.props.todoXClick(index)}
              task={todo.taskText}
              completed={todo.completed}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
