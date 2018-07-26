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

    /*static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps'
            + ' --nextProps= ' + nextProps.count
            + ' --prevState= ' + prevState.count);
    }

    componentDidMount() {
        console.log('componentDidMount: ' + this.state.count);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate'
            + ' --nextProps= ' + nextProps.count
            + ' --nextState= ' + nextState.count);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate'
            + ' --prevProps= ' + prevProps.count
            + ' --prevState= ' + prevState.count);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>componentDidUpdate()'
            + ' --prevProps= ' + prevProps.count
            + ' --prevState= ' + prevState.count
            + ' --snapshot= ' + snapshot);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }*/

    render() {
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
