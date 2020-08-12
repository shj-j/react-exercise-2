import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class Products extends Component {
  render() {
    const { category, products, handleClick } = this.props;
    return (
      <section>
        <h2 style={{ margin: '20px' }}>{category}</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {products.map((item, index) => (
            <Product key={index} product={item} handleClick={handleClick} />
          ))}
        </div>
      </section>
    );
  }
}
Products.propTypes = {
  products: PropTypes.array,
  category: PropTypes.string,
  handleClick: PropTypes.func,
};
export default Products;
