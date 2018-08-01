import React from 'react'
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import Styles from './styles';
import LINKS from '../Constants'

const Menu = ({tab, classes}) => {
  return (
    <AppBar position="static">
      <Tabs value={tab}
      centered>
        <Link to={LINKS.about.path} value='about' className={classes.link}>
          <Tab label={LINKS.about.label}/>
        </Link>
        <Link to={LINKS.counters.path}  value='counters' className={classes.link}>
          <Tab label={LINKS.counters.label}/>
        </Link>
        <Link to={LINKS.login.path}  value='login' className={classes.link}>
          <Tab label={LINKS.login.label}/>
        </Link>
      </Tabs>
    </AppBar>
  )
}

Menu.propTypes = {
  tab: PropTypes.string
}

export default withStyles(Styles)(Menu)
