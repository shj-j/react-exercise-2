import React, { Component } from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import Head from './component/Head';
import Content from './component/Content';

const URL = 'http://localhost:3000/products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      count: 0,
    };
  }

  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        let categories = new Set();

        data.forEach((item) =>
          categories.has(item.category) ? false : categories.add(item.category)
        );
        categories = [...categories];

        const products = {};
        categories.forEach((category) => (products[category] = []));
        // console.log(products);

        data.forEach((item) => {
          const { category, ...product } = item;
          // console.log(products[category]);
          products[category].push(product);
        });
        this.setState({ products });
      });
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { products, count } = this.state;
    return (
      <main className="app">
        <Head count={count} />
        <Content handleClick={this.handleClick} products={products} />
      </main>
    );
  }
}
App.protoTypes = {
  count: PropTypes.number,
  products: PropTypes.object,
};
export default App;
