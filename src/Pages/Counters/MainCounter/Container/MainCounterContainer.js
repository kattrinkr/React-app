import React, { Component } from 'react';

import CounterContainer from '../../Counter/Container/CounterContainer'
import CounterCreator from '../../CounterCreator/View/index'

class MainCounterContainer extends Component {
    constructor(props){
        super(props); 
          
        this.state = {
            countOfCounters: 1
        };
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(){  
        this.setState((prevState) => {
            return {
                countOfCounters: prevState.countOfCounters + 1
            }
        }) 
    }

    decrement(){
        if (this.state.countOfCounters > 1) {
            this.setState((prevState) => {
                return {
                    countOfCounters: prevState.countOfCounters - 1
                }
            })
        }
    }

    reset(){
        this.setState(() => {
            return {
                countOfCounters: 1
            }
        }) 
    }

    render() {
        console.log('Mounting and Update методы у MainCounterContainer')

        let counterContainers = [];
        for (let i = 0; i < this.state.countOfCounters; i++) {
            counterContainers.push(<CounterContainer />);
        }
        const props = {
            increment: this.increment,
            decrement: this.decrement,
            reset: this.reset,
            counterContainers: counterContainers,
            countOfCounters: this.state.countOfCounters
        }
        
        return <CounterCreator {...props} />     
    }
}

export default MainCounterContainer;