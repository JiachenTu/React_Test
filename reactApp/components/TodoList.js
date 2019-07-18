import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return <Todo task={todo.taskText} completed={todo.completed} />;
        })}
      </ul>
    );
  }
}

export default TodoList;
