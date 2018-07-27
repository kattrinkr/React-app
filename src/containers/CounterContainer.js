import React, { Component } from 'react';
import Counter from '../views/Counter/index'

class CounterContainer extends Component {
    constructor(props){
        super(props); 
        this.state = {
            count: 0
        };
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(){        
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    decrement(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    reset(){
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    UNSAFE_componentWillReceiveProps(itemProps) {
        console.log('Update метод у единицы счётчика')
        if (this.state.count % 2 === 0 && itemProps.operation === 'increment') {
            this.increment();
        } else if (this.state.count % 2 !== 0 && itemProps.operation === 'decrement') {
            this.decrement();
        } else if (itemProps.operation === 'reset'){
            this.reset();
        }
    }

    render() {
        console.log('Mounting and Update методы у CounterContainer')
        const { count } = this.state;
        const props = {
            count,
            increment: this.increment,
            decrement: this.decrement,
            reset: this.reset
        }

        return <Counter {...props} />;
    }
}

export default CounterContainer;
