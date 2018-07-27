import React, { Component } from 'react';
import CounterContainer from './CounterContainer'
import MainCounter from '../views/MainCounter/index'
import ReactDOM from 'react-dom';

class MainCounterContainer extends Component {
    constructor(props){
        super(props); 
          
        this.state = {
            countOfCounters: 1,
            functions : [],
            operation : null
        };
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(){  
        this.setState((prevState) => {
            this.state.functions.push(<CounterContainer />);
            return {
                countOfCounters: prevState.countOfCounters + 1,
                operation: 'increment'
            }
        }) 
    }

    decrement(){
        this.setState((prevState) => {
            this.state.functions.pop();
            return {
                countOfCounters: prevState.countOfCounters - 1,
                operation: 'decrement'
            }
        })
    }

    reset(){
        this.setState((prevState) => {
            this.state.functions = [];
            return {
                countOfCounters: 1,
                operation: 'reset'
            }
        }) 
    }

    render() {
        console.log('Mounting and Update методы у MainCounterContainer')
        const { countOfCounters } = this.state;
        const props = {
            countOfCounters,
            increment: this.increment,
            decrement: this.decrement,
            reset: this.reset
        }

        const { operation } = this.state;
        return (
        <div>
          <MainCounter {...props} />
          <CounterContainer operation={operation} key={0}/>
          {this.state.functions.map((object, i) => <CounterContainer operation={operation} key={i+1}/>)}
        </div>) ;
    }
}

export default MainCounterContainer;