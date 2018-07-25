import React, { Component } from 'react';
import Counter from '../views/Counter/index'

class View extends Component {
    constructor(props){
        super(props); 
          
        this.state = {count: 0};
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
        
    increment(){
        this.setState({count: ++this.state.count})
    }

    decrement(){
        this.setState({count: --this.state.count})
    }

    reset(){
        this.setState({count: 0})
    }

    render() {
        return <Counter count={this.state.count}
                     increment = {this.increment}
                     decrement = {this.decrement}
                     reset = {this.reset}></Counter>;
    }
}

export default View;
