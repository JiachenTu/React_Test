import React from 'react';
import ReactDOM from 'react-dom';

let dummyData = [
  { taskText: 'Todo1', completed: true },
  { taskText: "Catch 'em all", completed: false },
  { taskText: 'Todo2', completed: false }
];
class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: ''
    };
  }
  render() {
    return <input type="text" placeholder="Todo" value={this.state.todoInput} />;
  }
}

class Todo extends React.Component {
  render() {
    if (this.props.completed === false) {
      return (
        <li>
          <button type="button">X</button>
          {this.props.task}
        </li>
      );
    } else {
      return (
        <li>
          <button type="button">X</button>
          <strike className="completed">{this.props.task}</strike>
        </li>
      );
    }
  }
}

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

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.setState({ todos: dummyData });
  }

  render() {
    return (
      <div>
        <div>
          <InputLine />
          Add Todo
        </div>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
