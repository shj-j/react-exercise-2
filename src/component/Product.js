import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ProImage from '../assets/product_image_placeholder.png'

class Product extends Component{
    render(){
        const {product, handleClick} = this.props
        return(
            <div style={{margin:'20px'}}>
                <h3 style={{marginBottom:'20px'}} >{product.name}</h3>
                <img src={ProImage} alt="product image" className="image-size" />
                <div style={{display:'flex'}}>
                    <p style={{marginRight:'10px'}}>{product.price}</p>
                    <button onClick={handleClick} style={{backgroundColor:'#096ee3', color:'white', border:'0'}}>add to cart</button>
                </div>
            </div>
        )
    }
}

// Product.PropTypes ={
//     cotegory: PropTypes.string,
//     name: PropTypes.string,
//     price: PropTypes.string,
// }

export default Product