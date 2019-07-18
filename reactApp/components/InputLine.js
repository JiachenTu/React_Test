import React from 'react';
import { format } from 'url';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: ''
    };
  }

  handleClick(event) {
    event.preventDefault();
    this.props.submit(this.state.todoInput);
  }

  handleChange(event) {
    this.setState({ todoInput: event.target.value });
  }

  render() {
    return (
      <form onSubmit={event => this.handleClick(event)}>
        <input
          type="text"
          placeholder="Todo"
          value={this.state.todoInput}
          onChange={event => {
            this.handleChange(event);
          }}
        />
        <input type="submit" value="Add Todo" />
      </form>
    );
  }
}

export default InputLine;
