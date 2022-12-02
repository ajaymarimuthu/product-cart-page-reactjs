import React from 'react'
import './Details.css'

function Details() {
    return (
        <div className='details'>

            <div className="details-headings">
                <h4>SNEAKER COMPANY</h4>
                <h1>Fall Limited Edition</h1>
                <h1>Sneakers</h1>
            </div>



            <div className="details-text">
                <p > These low profiles sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
                    they'll withstand everything the weather can offer
                </p>

            </div>

            <div className="details-price">
                <h3>$125.00 <span>  50%</span></h3>
                <p>$250.00</p>
            </div>


            <div className="buttons">
                <div className="count-buttons">
                    <button className='minus'>-</button>
                    <p className='number'>0</p>
                    <button className='plus'>+</button>
                </div>


                <div className="cart-btn">
                    <button className='cart-btn-cart'> Add to cart</button>
                </div>
            </div>


        </div>
    )
}

export default Details