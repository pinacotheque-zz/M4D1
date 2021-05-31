import {Component} from 'react'

class FirstClassComponent extends Component {
    // STATE is and object which will keep track of some data through time.

    // you need a Class Component

    state ={
        name:'Gamze'
    }

    render() {
        // in every class component you MUST have a render method
        return <h1 className={this.props.myClass} onClick ={()=> this.setState({name: 'Brian'})} >{this.state.name}</h1>
    }
}

export default FirstClassComponent