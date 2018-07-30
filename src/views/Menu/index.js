import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';


const Menu = ({tab}) => {
  return (
    <AppBar position="static">
      <Tabs value={tab}
          centered>
        <Tab label='О нас' href='about' value={'about'}/>
        <Tab label='Счётчики' href='counters' value={'counters'}/>
      </Tabs>
    </AppBar>
  )
}

Menu.propTypes = {
  tab: PropTypes.string
}

export default Menu
