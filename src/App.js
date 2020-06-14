import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButtion = () => {
    this.setState({count: this.state.count + 1})
  }

  handleMinusButtion = () => {
    this.setState({count: this.state.count - 1})
  }
  
  render() {
    return (
      <>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButtion}>+1</button>
        <button onClick={this.handleMinusButtion}>-1</button>
      </>
    )
  }
}

export default App;
