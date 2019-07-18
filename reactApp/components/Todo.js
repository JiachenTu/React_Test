import React from 'react';

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

export default Todo;
