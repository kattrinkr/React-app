import React from 'react'
//import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Styles from './styles';

const MainCounter = ({count, increment, decrement, reset, classes}) => {
    return (
      <div className={classes.wrapper}> 
        <Typography variant="display2" gutterBottom className={classes.h1}>
         Welcome to the Creator of counters
        </Typography>
        <div className={classes.buttons}>
          <Button variant="contained" color="primary" onClick={decrement} className={classes.button}>
           Delete
          </Button>
          <Button variant="contained" color="primary" onClick={reset} className={classes.button}>
           Reset
          </Button>
          <Button variant="contained" color="primary" onClick={increment} className={classes.button}>
           Add New
          </Button>
        </div>
     </div>
    )
}

/*Counter.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}*/

export default withStyles(Styles)(MainCounter)