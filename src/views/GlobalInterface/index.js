import React from 'react'
import PropTypes from 'prop-types';
import MainCounter from '../MainCounter/index'
import CounterContainer from '../../containers/CounterContainer'
import MenuContainer from '../../containers/MenuContainer';


const GlobalInterface = ({increment, decrement, reset, counterContainers, operation}) => {
    const props = {
        increment: increment,
        decrement: decrement,
        reset: reset
    }
    return (
        <div id='main'>
          <MenuContainer tab='counters'/>
          <MainCounter {...props} />
          {counterContainers.map((object, i) => <CounterContainer operation={operation} key={i}/>)}
        </div>
    )
}

MainCounter.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    counterContainers: PropTypes.array,
    operation: PropTypes.string
}

export default GlobalInterface