import React from 'react'
import PropTypes from 'prop-types';

import MainCounter from '../MainCounter'
import CounterContainer from '../../Containers/CounterContainer'
import Menu from '../../../../Components/Menu';


const CounterCreator = ({increment, decrement, reset, counterContainers, countOfCounters, resetState}) => {
    const props = {
        increment: increment,
        decrement: decrement,
        reset: reset
    }
    return (
        <div>
          <Menu tab = 'counters'/>
          <MainCounter {...props} />
          {counterContainers.map((object, i) => <CounterContainer countOfCounters={countOfCounters} resetState={resetState} key={i}/>)}
        </div>
    )
}

CounterCreator.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    counterContainers: PropTypes.array,
    operation: PropTypes.string
}

export default CounterCreator