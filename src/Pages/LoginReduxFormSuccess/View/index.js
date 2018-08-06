import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Styles from './styles';

const Success = ({email, password, classes}) => {
    return (
      <div className={classes.data}> 
          <h3>{email}</h3>
          <h3>{password}</h3>
      </div>
    )
}

Success.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default withStyles(Styles)(Success)