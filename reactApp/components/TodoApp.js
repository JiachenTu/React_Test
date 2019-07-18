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
  removeTodo(index) {
    dummyData.splice(index, 1);
    this.setState({ todos: dummyData });
  }

  addTodo(task) {
    dummyData = dummyData.concat({ taskText: task, completed: false });
    this.setState({ todos: dummyData });
  }

  componentDidMount() {
    this.setState({ todos: dummyData });
  }
  toggleComplete(index) {
    dummyData[index].completed = !dummyData[index].completed;
    this.setState({ todos: dummyData });
  }

  render() {
    return (
      <div>
        <div>
          <InputLine submit={task => this.addTodo(task)} />
        </div>
        <TodoList
          toggleComplete={index => this.toggleComplete(index)}
          todoXClick={index => {
            this.removeTodo(index);
          }}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default TodoApp;
