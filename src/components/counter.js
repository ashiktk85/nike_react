import React, {Component} from "react";

class Counter extends Component {
    state = {
        counter : 0
      }
    
      increment = () => {
        this.setState({
          counter : this.state.counter + 1
        })
      }
    
        decrement = () => {
          this.setState({
            counter  : this.state.counter - 1
          })
        }
      
      render() {
        return (
          <div className="container">
            <h1 className="title">Counter App</h1>
            <h2 className = "counter-variable">{this.state.counter}</h2>
            <button className="plus" onClick={this.increment}>+</button>
            <button className="minus" onClick={this.decrement}>-</button>
          </div>
        )
      }
}

export default Counter;