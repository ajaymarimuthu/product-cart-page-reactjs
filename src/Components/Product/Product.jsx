import React from 'react'
import productOne from '../../images/image-product-1.jpg'
import subone from '../../images/image-product-1-thumbnail.jpg'
import subtwo from '../../images/image-product-2-thumbnail.jpg'
import subthree from '../../images/image-product-3-thumbnail.jpg'
import subfour from '../../images/image-product-4-thumbnail.jpg'
import './Product.css'

function Product() {
  return (
    <div className='product-container'> 

        
        
        <img className='productOne' src={productOne} alt="" />

        <div className="product-images">

            <img className='produtc-image selected' src={subone} alt="" />
            <img className='produtc-image' src={subtwo} alt="" />
            <img className='produtc-image' src={subthree} alt="" />
            <img className='produtc-image' src={subfour} alt="" />

        </div>
    </div>
  )
}

export default Product