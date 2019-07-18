import React from 'react';

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

export default InputLine;
