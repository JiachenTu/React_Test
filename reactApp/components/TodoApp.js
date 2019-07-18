import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';

let dummyData = [
  { taskText: 'Todo1', completed: true },
  { taskText: "Catch 'em all", completed: false },
  { taskText: 'Todo2', completed: false }
];

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

export default TodoApp;
