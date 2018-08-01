import React from 'react'

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Styles from './styles';

const Error = ({classes}) => (
    <div className={classes.wrapper}>
      <Typography variant="display2" gutterBottom className={classes.message}>
          404 - страница не найдена
        </Typography>
    </div>
)

export default withStyles(Styles)(Error)