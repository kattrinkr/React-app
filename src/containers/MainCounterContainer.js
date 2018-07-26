import React, { Component } from 'react';
import CounterContainer from './CounterContainer'
import MainCounter from '../views/MainCounter/index'
import ReactDOM from 'react-dom';

class MainCounterContainer extends Component {
    constructor(props){
        super(props); 
          
        this.state = {
            countOfCounters: 0,
            functions : []
        };
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    static componentWillUpdate() {
    }   

    shouldComponentUpdate(){
        return true;
    }

    componentWillUpdate(){
    }

    increment(){  
        this.setState((prevState) => {
            this.state.functions.push(<CounterContainer />);
            return {
                countOfCounters: prevState.countOfCounters + 1,
            }
        }) 
    }

    decrement(){
        this.setState((prevState) => {
            this.state.functions.pop();
            return {
                countOfCounters: prevState.countOfCounters - 1,
            }
        })
    }

    reset(){
        this.setState((prevState) => {
            this.state.functions = [];
            return {
                countOfCounters: 0,
            }
        }) 
    }

    render() {
        const { countOfCounters } = this.state;
        const props = {
            countOfCounters,
            increment: this.increment,
            decrement: this.decrement,
            reset: this.reset
        }
        return (
        <div>
          <MainCounter {...props} />
          <CounterContainer  />
          {this.state.functions.map((object, i) => <CounterContainer obj={object} key={i} />)}
        </div>) ;
    }
}

export default MainCounterContainer;