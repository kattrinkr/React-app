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
        {LINKS.map((item) => (
        <Link to={item.path} value={item.value} className={classes.link} key={item.value}>
          <Tab label={item.label}/>
        </Link>
        ))}
      </Tabs>
    </AppBar>
  )
}

Menu.propTypes = {
  tab: PropTypes.string
}

export default withStyles(Styles)(Menu)
