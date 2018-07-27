import React, { Component } from 'react';
import CounterContainer from './CounterContainer'
import GlobalInterface from '../views/GlobalInterface/index'

class MainCounterContainer extends Component {
    constructor(props){
        super(props); 
          
        this.state = {
            countOfCounters: 1,
            operation : null
        };
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(){  
        this.setState((prevState) => {
            return {
                countOfCounters: prevState.countOfCounters + 1,
                operation: 'increment',
            }
        }) 
    }

    decrement(){
        if (this.state.countOfCounters > 1) {
            this.setState((prevState) => {
                return {
                    countOfCounters: prevState.countOfCounters - 1,
                    operation: 'decrement'
                }
            })
        }
    }

    reset(){
        this.setState((prevState) => {
            return {
                countOfCounters: 1,
                operation: 'reset'
            }
        }) 
    }

    render() {
        console.log('Mounting and Update методы у MainCounterContainer')
        const { operation } = this.state;

        let counterContainers = [];
        for (let i = 0; i < this.state.countOfCounters; i++) {
            counterContainers.push(<CounterContainer />);
        }
        const props = {
            increment: this.increment,
            decrement: this.decrement,
            reset: this.reset,
            counterContainers: counterContainers,
            operation
        }
        
        return <GlobalInterface {...props} />     
    }
}

export default MainCounterContainer;