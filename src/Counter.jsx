import {Component} from 'react'

class Counter extends Component{
    state = {
        amount:0
    }

    increase = () => this.setState({amount: this.state.amount + 1})
    decrease = () => this.setState({amount: this.state.amount - 1})

    render() {
        return (
            <div>
                <button onClick = {this.increase}>increase by 1</button>
                <h2>{this.state.amount}</h2>
                <button onClick = {this.decrease}>decrease by 1</button>

            </div>
        )
    }

}
export default Counter