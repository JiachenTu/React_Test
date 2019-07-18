import React from 'react';

class Todo extends React.Component {
  render() {
    if (this.props.completed === false) {
      return (
        <li>
          <h4 onClick={() => this.props.toggleComplete(this.props.ind)}>
            <button onClick={() => this.props.todoXClick(this.props.ind)} type="button">
              X
            </button>{' '}
            {this.props.task}
          </h4>
        </li>
      );
    } else {
      return (
        <li>
          <h4 onClick={() => this.props.toggleComplete(this.props.ind)}>
            <button onClick={() => this.props.todoXClick(this.props.ind)} type="button">
              X
            </button>{' '}
            <strike className="completed"> {this.props.task} </strike>
          </h4>
        </li>
      );
    }
  }
}

export default Todo;
