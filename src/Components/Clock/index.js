import { Component } from "react";
import './index.css'

class Clock extends Component {
    state = {
        date: new Date()
    }
    componentDidMount = () => {
        this.timerId = setInterval(this.tick, 1000)
    }
     
    tick = () => {
        this.setState({date: new Date()})
    }

    componentWillUnmount = () => {
        clearInterval(this.timerId)
    }

    render() {
        const {date} = this.state
        return (
            <div className="timer-container">
                <h1 className="clock-text">Clock</h1>
                <p className="timer">{date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock
