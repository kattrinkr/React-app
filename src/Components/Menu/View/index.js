import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import Styles from './styles';

const Menu = ({tab, classes}) => {
  return (
    <AppBar position="static">
      <Tabs value={tab}
      centered>
        <Link to='/about' value={'about'} className={classes.link}><Tab label='О нас'/></Link>
        <Link to='/counters'  value={'counters'} className={classes.link}><Tab label='Счётчики'/></Link>
      </Tabs>
    </AppBar>
  )
}

Menu.propTypes = {
  tab: PropTypes.string
}

export default withStyles(Styles)(Menu)
