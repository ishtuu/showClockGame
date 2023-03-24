import Clock from "./Components/Clock"
import { Component } from "react"

import './App.css'

class App extends Component {
  state = {showClock: false}

  onToggleClock = () => {
    this.setState(prevState => {
      const {showClock} = prevState
      return {
        showClock: !showClock,
      }
    })
  }
  render() {
    const {showClock} = this.state
    return (
      <div className="clock-bg">
        <button type="button" onClick={this.onToggleClock} className="button">
          {showClock ? "Hide Clock" : "Show Clock"}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
