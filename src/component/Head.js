import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Head extends Component {
  render() {
    const { count } = this.props;
    return (
      <div
        style={{
          backgroundColor: '#096ee3',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1 style={{ color: 'white', flex: 0.9, margin: '20px' }}>Store</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '20px',
            alignItems: 'center',
          }}
        >
          <i
            className="material-icons"
            style={{ marginRight: '10px', color: 'white' }}
          >
            shopping_cart
          </i>
          <span className="count" style={{ color: 'white' }}>
            {count}
          </span>
        </div>
      </div>
    );
  }
}

Head.propTypes = {
  count: PropTypes.number,
};
export default Head;
