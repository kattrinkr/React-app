import React from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Styles from './styles';

const Counter = ({count, increment, decrement, reset, classes}) => {
    return (
      <div className={classes.wrapper}> 
        <Typography variant="display2" gutterBottom className={classes.digit}>
         {count}
        </Typography>
        <Button variant="contained" color="primary" onClick={increment} className={classes.button}>
         Plus
        </Button>
        <Button variant="contained" color="primary" onClick={decrement} className={classes.button}>
         Minus
        </Button>
        <Button variant="contained" color="primary" onClick={reset} className={classes.button}>
         Reset
        </Button>
     </div>
    )
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default withStyles(Styles)(Counter)

