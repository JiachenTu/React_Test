import React from 'react';
import ReactDOM from 'react-dom';

let dummyData = ['Do1', 'Do2', 'Do3'];
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
    return (
      <li>
        <button type="button">X</button>
        {this.props.task}
      </li>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {dummyData.map(todo => {
          return <Todo task={todo} />;
        })}
      </ul>
    );
  }
}

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <div>
          <InputLine />
          Add Todo
        </div>
        <TodoList />
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
