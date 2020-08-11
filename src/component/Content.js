import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Content extends Component{
    render(){
        const {onIncrease} = this.props
        return(
            <div style={{ margin: '20px' }}>
                <button onClick ={onIncrease}>add to cart</button>
            </div>
        )
    }
}

Content.PropTypes = {
    onIncrease: PropTypes.func,
  };
export default Content