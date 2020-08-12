import React, { Component } from 'react';
import Products from './Products';
import PropTypes from 'prop-types';

class Content extends Component {
  render() {
    const { products, handleClick } = this.props;
    return (
      <div>
        {Object.keys(products).map((category, index) => (
          <Products
            key={index}
            category={category}
            products={products[category]}
            handleClick={handleClick}
          />
        ))}
      </div>
    );
  }
}

Content.propTypes = {
  handleClick: PropTypes.func,
  products: PropTypes.Object,
};
export default Content;
