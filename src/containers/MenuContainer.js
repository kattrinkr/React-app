import React from 'react';
import Menu from '../views/Menu/index'

class MenuContainer extends React.Component {
    constructor(props){
      super(props); 
      this.state = {
          tab: props.tab
      }
    }
  
    render() {
        const { tab } = this.state;
        return <Menu tab = {tab} />;
    }
}

export default MenuContainer