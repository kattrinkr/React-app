import React, { Component } from 'react';

import TextFields from '../View'

class TextFieldContainer extends Component {
    render() {
        return <TextFields {...this.props} />
    }
} 

export default TextFieldContainer