import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ProImage from '../assets/product_image_placeholder.png'

class Product extends Component{
    state={
        category: this.props.category,
        price: this.props.price,
        name: this.props.name,
        value:0,
    }
    addToCart=()=>{
        this.setState({
            value: this.state.value +1,
        })
    }
    render(){
        return(
            <div>
                <h3>{this.name}</h3>
                <img src={ProImage} className="image-size" />
                <p>{this.state.value}</p>
                <button onClick={this.addToCart}>add to cart</button>
            </div>
        )
    }
}

Product.PropTypes ={
    cotegory: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
}

export default Product