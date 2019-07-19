import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import axios from 'axios';

const dbUrl = 'http://localhost:3000/db';

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
    // dummyData = dummyData.concat({ taskText: task, completed: false });
    // this.setState({ todos: dummyData });

    axios
      .post(dbUrl + '/add', {
        taskText: task,
        completed: false
      })
      .then(response => this.setState({ todos: this.state.todos.concat(response.data) }))

      .catch(function(error) {
        console.log(error);
      });
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
