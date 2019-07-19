import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import axios from 'axios';

const dbUrl = 'http://localhost:3000/db';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  removeTodo(id) {
    // dummyData.splice(index, 1);
    // this.setState({ todos: dummyData });
    console.log('removeTodo starting');
    axios
      .post(dbUrl + '/remove', { _id: id })
      .then(response => {
        console.log('res', response, 'todo', this.state.todos);
        this.setState({ todos: response.data });
        //a new array with all the same contents but removed one
      })
      .catch(err => console.log(err));
  }

  addTodo(task) {
    axios
      .post(dbUrl + '/add', {
        task: task,
        completed: false
      })
      .then(response => this.setState({ todos: this.state.todos.concat(response.data) }))

      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    // this.setState({ todos: dummyData });
    console.log('componentDidMount starting');
    axios.get(dbUrl + '/all').then(response => {
      console.log(response);
      this.setState({ todos: response.data });
    });
  }
  toggleComplete(id) {
    // dummyData[index].completed = !dummyData[index].completed;
    // this.setState({ todos: dummyData });
    console.log('toggleComplete starting', 'id', id);
    axios
      .post(dbUrl + '/toggle', { _id: id })
      .then(response => {
        console.log(response);
        let newTodos = this.state.todos.map(todo => {
          if (todo._id === id) {
            return response.data;
          }
          return todo;
        });
        console.log(newTodos);
        this.setState({ todos: newTodos });
      })
      .catch(err => console.log(err));

    //tobe changed
  }

  render() {
    return (
      <div>
        <div>
          <InputLine submit={task => this.addTodo(task)} />
        </div>
        <TodoList
          toggleComplete={id => this.toggleComplete(id)}
          todoXClick={id => {
            this.removeTodo(id);
          }}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default TodoApp;
